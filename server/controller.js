let getAll = (req, res) => {
    const dbInstance = req.app.get("db");
  
    dbInstance
      .read_posts()
      .then((posts) => res.status(200).send(posts))
      .catch((err) => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!",
        });
        console.log(err);
      });
  };

  let createPost = (req, res) => {
    const dbInstance = req.app.get("db", );
  
    var body = req.body;
    dbInstance
      .create_post([body.name, body.content, body.image])
      .then((post) => res.status(200).send(post))
      .catch((err) => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!",
        });
        console.log(err);
      });
  };

  var authorization = (req, res) => {
    var { username, password } = req.body;
  
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        var dbInstance = req.app.get("db");
        dbInstance.create_user([username, hash]).then((result) => {
          let user = result[0];
          console.log(user);
          res.json(user);
        });
      });
    });
  }

  module.exports = {
    getAll,
    createPost,
    
  };