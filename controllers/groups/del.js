const { Group } = require('../../models');

const del = async (req, res) => {
  try {
    await Group.findOneAndDelete({ _id: req.params.groupId });
    res.status(200).json({
      status: 'No content',
      code: 204,
      message: `Group with id ${req.params.groupId} was deleted`,
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = del;
