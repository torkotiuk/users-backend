const { User } = require('../../models');

const del = async (req, res) => {
  try {
    await User.findOneAndDelete({ _id: req.params.userId });
    res.status(200).json({
      status: 'No content',
      code: 204,
      message: `Contact with id ${req.params.userId} was deleted`,
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = del;
