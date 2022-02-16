const { Group } = require('../../models');

const add = async (req, res) => {
  try {
    const result = await Group.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = add;
