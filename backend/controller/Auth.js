const { User } = require("../model/User");

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const response = await user.save();
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(401).json({ message: "Invalid Credentials" });
    }
    if (user.password === req.body.password) {
      res.status(200).json(user);
    } else {
      res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch (err) {
    res.status(400).json(err);
  }
};
