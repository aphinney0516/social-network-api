const { User, Thought } = require('../models');

module.exports = {
    // Get all users
    getUsers(req, res) {
      User.find()
        .then(async (users) => {
          return res.json(users);
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    // Get a single user
    getSingleUser(req, res) {
      User.findOne({ _id: req.params.userId })
        .select('-__v')
        .populate('thoughts')
        .then(async (user) =>
          !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json({
                user
              })
        )
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    // create a new user
    createUser(req, res) {
      User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },

    // add a friend
    addFriend(req, res) {
        User.findByIdAndUpdate({_id:req.params.userId}, {$addToSet:{friends:req.params.friendId}}, {new:true, runValidators:true})
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },

    // remove a friend
    removeFriend(req, res) {
      User.findByIdAndUpdate({_id:req.params.userId}, {$pull:{friends:req.params.friendId}}, {new:true, runValidators:true})
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
    },

    // delete user account
    deleteUser(req, res) {
      User.findByIdAndDelete({_id:req.params.userId}).then(response => res.json(response)).catch((err) => res.status(500).json(err));
    }
  };
  