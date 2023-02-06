const { User, Thought } = require('../models');

module.exports = {
    // Get all thoughts
    getThought(req, res) {
      Thought.find()
        .then(async (thoughts) => {
          return res.json(thoughts);
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    // Get a single thought
    getSingleThought(req, res) {
      Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .then(async (thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought with that ID' })
            : res.json({
                thought
              })
        )
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    // create a new thought
    createThought(req, res) {
      Thought.create(req.body)
        .then(thoughtData => {
          return User.findOneAndUpdate({_id:req.body.userId}, {$push:{thoughts:thoughtData._id}})
        })
        .then((updatedUser) => res.json(updatedUser))
        .catch((err) => res.status(500).json(err));
    },

    // add a reaction to a thought
    addReaction(req, res) {
      Thought.findOneAndUpdate({_id:req.params.thoughtId}, {$addToSet:{reactions:req.body}}, {runValidators:true, new:true})
      .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought with that ID' })
            : res.json({
                thought
              })
        )
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        })
    }
  };
  