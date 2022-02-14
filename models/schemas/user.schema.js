const { Schema } = require('mongoose');

const userSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

module.exports = userSchema;
