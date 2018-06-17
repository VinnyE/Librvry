const passport = require("passport");
const verify = require("../handlers/verification");
const mongoose = require("mongoose");
const User = mongoose.model("User");

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.logIn = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).json({
        error: "An error occured attempting to log in user"
      });
    }
    if (!user) {
      return res.status(401).json({
        error: "Incorrect email or password"
      });
    }

    req.logIn(user, err => {
      if (err) {
        console.log(err);

        return res.status(500).json({
          error: "An error occured attempting to log in user"
        });
      }

      const token = verify.getToken(user);
      const { email } = user;
      res.status(200).json({
        message: "Login Successful",
        success: true,
        token,
        userInfo: { email }
      });
    });
  })(req, res, next);
};

exports.logOut = (req, res, next) => {
  req.logout();

  res.status(200).json({
    message: "Logout Successful"
  });
};
