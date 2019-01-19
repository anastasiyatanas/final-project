var User= require("../models/User")
module.exports={
    create: function(req, res){
        User.create({
            name:req.body.name,
            image:req.body.image,
            email:req.body.email,
        }).then(user => res.json(user))
    }, findAll: function(req, res) {
        User
          .find()
          .then(User => res.json(User))
          .catch(err => res.status(422).json(err));
      },
      update: function(req, res) {
        User
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(User => res.json(User))
          .catch(err => res.status(422).json(err));
      },

}