const { Schema } = require('mongoose');

const groupSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      minLength: [2, 'Name of group should be at least 2 characters'],
    },
  },
  { versionKey: false, timestamps: true },
);

module.exports = groupSchema;
