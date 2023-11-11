import mongoose, { Schema } from "mongoose";

// const { Schema } = mongoose;

const userSchema = new Schema(
   {
      name: {
         type: String,
         trim: true,
         required: true,
      },
      email: {
         type: String,
         trim: true,
         required: true,
         unique: true,
      },
      password: {
         type: String,
         required: true,
         min: 3,
         max: 16,
      },
      secret: {
         type: String,
         required: true,
      },
      username: {
         type: String,
         unique: true,
         required: true,
      },
      about: {},
      photo: String,
      following: [{ type: Schema.ObjectId, ref: "User" }],
      followers: [{ type: Schema.ObjectId, ref: "User" }],
   },
   { timestamps: true }
);

// const User = mongoose.model("User", userSchema);

// module.exports = User;

export default mongoose.model("User", userSchema);
