const { Group } = require('../../models');

const getById = async (req, res) => {
  const { groupId } = req.params;

  try {
    const result = await Group.findById(groupId);

    if (!result) {
      return res.status(404).json({
        message: "Item with this id doesn't exist",
      });
    }

    res.json({
      status: 'success',
      code: 200,
      data: {
        result: result,
      },
    });
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};

module.exports = getById;
