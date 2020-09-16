require("dotenv").config()
var express = require("express")
var app = express()
app.use(express.json())
const PORT = 4000
var bcrypt = require("bcrypt")
var secret = "kale"
var massive = require("massive")


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





app.listen(PORT, () => {
    console.log(`running on server ${PORT}`)
})