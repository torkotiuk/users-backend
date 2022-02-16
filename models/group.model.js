const { model } = require('mongoose');
const { groupSchema } = require('./schemas');
const Group = model('group', groupSchema);
module.exports = Group;
