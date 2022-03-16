// Referenced from the code base: https://github.com/stevens-cs546-cs554/CS-546/blob/master/lecture_05/code/routes/index.js

const testRoutes = require("./test");

const constructorMethod = (app) => {
  app.use("/test", testRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;
