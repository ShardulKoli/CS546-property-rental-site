const express = require("express");
const app = express();
const configRoutes = require("./routes/index");
const session = require("express-session");
const static = express.static(__dirname + "/public");
var bodyParser = require('body-parser')

app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ extended: false }, { limit: "50mb" }))

app.use("/public", static);

const port = process.env.PORT || 4000;

app.use(
  session({
    name: "StudyRoomSesh",
    secret: "JbBSyig2rC",
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: 60000 },
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
  next();
});

configRoutes(app);

app.listen(port, () => {
  console.log("We've now got a server!");
});
