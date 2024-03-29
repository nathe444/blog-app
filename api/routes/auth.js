const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//registering a user

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    async function userExistsInDatabase(userName) {
      const user = await User.findOne({ username: userName });
      return user;
    }

    if (await userExistsInDatabase(req.body.username)) {
      res.status(400).send("User already exists");
    } else {
      const user = await newUser.save();
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// logging a user

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong credentials");
    if (user) {
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      !validPassword && res.status(400).json("Wrong credentials");

      const { password, ...others } = user._doc;

      res.status(200).json(others);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
