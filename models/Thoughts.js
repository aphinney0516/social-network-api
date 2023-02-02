const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reactions');
// Schema to create Student model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
    userName: {
        type: String,
        required: true
    },
    reactions:[reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;