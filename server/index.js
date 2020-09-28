require("dotenv").config();
var express = require("express");
const { getAll, createPost } = require("./controller");
var app = express();
app.use(express.json());
const PORT = 4001;
var bcrypt = require("bcrypt");
var secret = "kale";
var massive = require("massive");
var cors = require("cors");
const { query } = require("express");
app.use(cors());

const { CONNECTION_STRING } = process.env;

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then((dbInstance) => {
    app.set("db", dbInstance);
  })
  .catch((err) => console.log(err));

app.post("/auth");

app.post("/dash", (req, res) => {});

app.post("/login", (req, res) => {
  var { username, password } = req.body;
  var dbInstance = req.app.get("db");
  dbInstance.get_user([username]).then((result) => {
    var user = result[0];
    if (bcrypt.compareSync(password, user.hash)) {
      res.status(200).json(user);
    } else {
      res.status(403).json({
        not: "authorized",
      });
    }
  });
});

app.get("/new", getAll);
app.post("/post", createPost);

app.listen(PORT, () => {
  console.log(`running on server ${PORT}`);
});
