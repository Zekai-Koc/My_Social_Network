export const imageSource = (user) => {
   if (user.image) return user.image.url;
   else return "/images/logo.jpg";
   user.image.url;
};