require("dotenv").config()
var express = require("express")
var app = express()
app.use(express.json())
const PORT = 4000
var bcrypt = require("bcrypt")
var secret = "kale"
var massive = require("massive")
var cors = require("cors")
const { query } = require("express")
app.use(cors())


const { CONNECTION_STRING } = process.env

massive({
        connectionString: CONNECTION_STRING,
        ssl: { rejectUnauthorized: false }
    })
    .then(dbInstance => {
        app.set("db", dbInstance);
    })
    .catch(err => console.log(err));



app.post("/auth", (req, res) => {

    var { username, password } = req.body

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            var dbInstance = req.app.get("db")
            dbInstance.create_user([username, hash]).then(result => {
                let user = result[0]
                console.log(user)
                res.json(user)

            })

        });
    });

})


app.post("/login", (req, res) => {
    var { username, password } = req.body
    var dbInstance = req.app.get("db")
    dbInstance.get_user([username]).then(result => {
        var user = result[0]
        if (bcrypt.compareSync(password, user.hash)) {
            res.status(200).json(user)
        } else {
            res.status(403).json({
                not: "authorized"
            })
        }
    })
})

app.get("/posts", (req, res) => {
    var {userposts, search} = req.query
    console.log(userposts)
    res.json({
        test: "kaka"
    })
})









app.listen(PORT, () => {
    console.log(`running on server ${PORT}`)
})