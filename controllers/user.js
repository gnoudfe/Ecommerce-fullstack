const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const register = asyncHandler(async (req, res) => {
  const { email, password, username } = req.body;
  console.log(req.body);
  if (!email || !password || !username) {
    return res.status(400).json({
      success: false,
      message: "Missing inputs",
    });
  }
  const response = await User.create(req.body);
  return res.status(200).json({
    success: response ? true : false,
    message: response ? "Register succsesfully" : "Register failed",
    metadata: response,
  });
});

module.exports = {
  register,
};
