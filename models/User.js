const { Schema, model } = require('mongoose');

// Schema to create Student model
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
    },
    thoughts:[{
        type: Schema.Types.ObjectId,
        ref: 'Thoughts',
      },],
    friends:[{
        type: Schema.Types.ObjectId,
        ref: 'User',
      },]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('User', userSchema);

module.exports = User;
