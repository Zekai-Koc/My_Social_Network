const ParallaxBG = ({
   url = "/images/default.jpg",
   children = "My Social Network",
}) => {
   return (
      <div
         className="container-fluid"
         style={{
            backgroundImage: "url(" + url + ")",
            backgroundAttachment: "fixed",
            padding: "100px 0pc 75px 0px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            display: "block",
         }}
      >
         <h1
            className="display-1 font-weight-bold text-center"
            style={{ color: "white", fontWeight: "bold" }}
         >
            {children}
         </h1>
      </div>
   );
};

export default ParallaxBG;
