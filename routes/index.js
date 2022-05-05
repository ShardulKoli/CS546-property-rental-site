// Referenced from the code base: https://github.com/stevens-cs546-cs554/CS-546/blob/master/lecture_05/code/routes/index.js

const testRoutes = require("./test");
const loginRoutes = require("./login");
const signUpRoutes = require("./signup");
const propertyRoutes = require("./property");
const userRoutes = require("./userProfile");
const adminRoutes = require("./admin");

const constructorMethod = (app) => {
  app.use("/test", testRoutes);
  app.use("/login", loginRoutes);
  app.use("/signup", signUpRoutes);
  app.use("/property", propertyRoutes);
  app.use("/user", userRoutes);
  app.use("/admin", adminRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;
