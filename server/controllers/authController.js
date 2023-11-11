import User from "../models/user.js";
import { hashPassword, comparePassword } from "../helpers/auth.js";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";

export const register = async (req, res) => {
   //  console.log("REGISTER ENDPOINT => ", req.body);
   const { name, email, password, secret } = req.body;

   if (!name) {
      return res.json({
         error: "Name is required",
      });
   }

   if (!password || password.length < 6) {
      return res.json({
         error: "Password is required and should be 6 characters long",
      });
   }

   if (!secret) {
      return res.json({
         error: "Answer is required",
      });
   }

   const exist = await User.findOne({ email });
   if (exist) {
      return res.json({
         error: "Email is taken",
      });
   }

   const hashedPassword = await hashPassword(password);

   const user = new User({
      name,
      email,
      password: hashedPassword,
      secret,
      username: `${name}_${nanoid()}`,
   });

   try {
      await user.save();
      return res.json({
         ok: true,
      });
   } catch (err) {
      console.log("REGISTER FAILED => ", err);
      return res.status(400).send("Error. Try again.");
   }
};

export const login = async (req, res) => {
   // console.log(req.body);
   try {
      const { email, password } = req.body;
      // check if our db has user with that email
      const user = await User.findOne({ email });
      if (!user) {
         return res.json({
            error: "no user found",
         });
      }
      // check password
      const match = await comparePassword(password, user.password);
      if (!match) {
         return res.json({
            error: "Wrong password",
         });
      }
      // create signed token
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
         expiresIn: "7d",
      });
      user.password = undefined;
      user.secret = undefined;
      res.json({
         token,
         user,
      });
   } catch (err) {
      console.log(err);
      return res.status(400).send("Error. Try again.");
   }
};

export const currentUser = async (req, res) => {
   // console.log("req.headers", req.headers);
   // console.log("req", req.auth);
   try {
      const user = await User.findById(req.auth._id);
      if (!user) return res.sendStatus(400);

      res.json({ ok: true });
      // res.json(user);
   } catch (error) {
      console.log(error);
      res.sendStatus(400);
   }
};

export const forgotPassword = async (req, res) => {
   // console.log(req.body);
   const { email, newPassword, secret } = req.body;
   // validation
   if (!newPassword || newPassword < 6) {
      return res.json({
         error: "Wrong password",
      });
   }
   if (!secret) {
      return res.json({
         error: "Secret is required",
      });
   }
   const user = await User.findOne({ email, secret });
   if (!user) {
      return res.json({
         error: "We cant verify you with those details",
      });
   }

   try {
      const hashed = await hashPassword(newPassword);
      await User.findByIdAndUpdate(user._id, { password: hashed });
      return res.json({
         success: "Congrats, Now you can login with your new password",
      });
   } catch (err) {
      console.log(err);
      return res.json({
         error: "Something wrong. Try again.",
      });
   }
};

export const profileUpdate = async (req, res) => {
   console.log(req.body);

   try {
      const data = {};

      if (req.body.username) {
         data.username = req.body.username;
      }
      if (req.body.about) {
         data.about = req.body.about;
      }
      if (req.body.usenamername) {
         data.name = req.body.name;
      }
      if (req.body.password) {
         if (req.body.password.length < 6) {
            return res.json({
               error: "Password with at least 6 characters required!",
            });
         } else {
            data.password = await hashedPassword(req.body.password);
         }
      }
      if (req.body.secret) {
         data.secret = req.body.secret;
      }

      if (req.body.image) {
         data.image = req.body.image;
      }

      let user = await User.findByIdAndUpdate(req.auth._id, data, {
         new: true,
      });
      // console.log(user);

      (user.password = undefined), (user.secret = undefined);

      res.json(user);
   } catch (error) {
      if (error.code == 11000) {
         return res.json({ error: "Duplicate user name" });
      }

      console.log(error);
   }
};

export const findPeople = async (req, res) => {
   try {
      const user = await User.findById(req.auth._id);

      let following = user.following;

      following.push(user._id);

      const people = await User.find({ _id: { $nin: following } }).limit(10);

      res.json(people);
   } catch (error) {
      console.log(error);
   }
};

/* ******************** */
// export const register = async (req, res) => {
//    // console.log("Register endpoint: ", req.body);
//    // res.status(200).json(req.body);
//    const { name, email, password, secret } = req.body;

//    // VALIDATION
//    if (!name) return res.status(400).send("Name is required!");
//    if (!password || password.length < 3)
//       return res
//          .status(400)
//          .send("Password is required and should be 3 characters long!");
//    if (!secret) return res.status(400).send("Answer is required!");

//    const exist = await User.findOne({ email });

//    if (exist) return res.status(400).send("Email is taken!");

//    const hashedPassword = await hashPassword(password);

//    const user = new User({
//       name,
//       email,
//       password: hashedPassword,
//       secret,
//    });

//    try {
//       // const newUser = await user.save();
//       await user.save();
//       // console.log(user);
//       return res.status(201).json({ ok: true });
//    } catch (err) {
//       console.log("Register failed: ", err);
//       return res.status(400).send("Error creating user! Try again.");
//    }
// };

/* ******************** */
// export const login = async (req, res) => {
//    try {
//       // console.log(req.body);
//       const { email, password } = req.body;

//       if (!email || !password)
//          return res.status(400).send("Missing email or password!");

//       const user = await User.findOne({ email });
//       // console.log(user);
//       if (!user) return res.status(400).send("Incorrect credientials!");

//       const match = await comparePassword(password, user.password);

//       if (!match) return res.status(400).send("Incorrect credientials!");

//       const token = jwt.sign(
//          {
//             _id: user._id,
//          },
//          process.env.JWT_SECRET,
//          { expiresIn: "90d" }
//       );

//       user.password = undefined;
//       user.secret = undefined;

//       return res.status(200).json({ token, user });
//    } catch (err) {
//       console.log(err);
//       return res.status(400).send("Error! Try again.");
//    }
// };

/* ******************** */
// export const forgotPassword = async (req, res) => {
//    // console.log(req.body);
//    const { email, newPassword, secret } = req.body;
//    // validation
//    if (!newPassword || newPassword < 6) {
//       return res.json({
//          error: "Wrong password",
//       });
//    }
//    if (!secret) {
//       return res.json({
//          error: "Secret is required",
//       });
//    }
//    const user = await User.findOne({ email, secret });
//    if (!user) {
//       return res.json({
//          error: "We cant verify you with those details",
//       });
//    }

//    try {
//       const hashed = await hashPassword(newPassword);
//       await User.findByIdAndUpdate(user._id, { password: hashed });
//       return res.json({
//          success: "Congrats, Now you can login with your new password",
//       });
//    } catch (err) {
//       console.log(err);
//       return res.json({
//          error: "Something wrong. Try again.",
//       });
//    }
// };
