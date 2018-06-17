const mongoose = require("mongoose");
const User = mongoose.model("User");

exports.register = (req, res) => {
  const {
    body: { email, password }
  } = req;

  const user = new User({
    email: email
  });

  User.register(user, password, err => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    console.log("User saved successfully");
    res.json({ success: true });
  });
};
