const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

const router = express.Router();

// Register User
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Please enter a password with 6 or more characters").isLength({ min: 6 }),
  ],
  async (req, res) => {
    // Check and validate the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ errors: [{ msg: "User already exists!" }] });
      }

      const newUser = new User({ name, email, password });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(password, salt);
      await newUser.save();

      // Return jsonwebtoken
      const payload = {
        user: {
          id: newUser.id,
        },
      };

      // Sign and send token
      jwt.sign(payload, process.env.JWTSECRET, { expiresIn: 36000 });
      res.status(200).json({ user: newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ errors: [{ msg: "Whoops! Looks like something is wrong from our side!" }] });
    }
  }
);

// Sign in
router.post(
  "/auth",
  [check("email", "Please include a valid email").isEmail(), check("password", "Password is required").exists()],
  async (req, res) => {
    // Check and validate the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ errors: [{ msg: "Invalid credentials!" }] });
      }

      // Check if the password is correct
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ errors: [{ msg: "Invalid credentials!" }] });
      }

      // Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(payload, process.env.JWTSECRET, { expiresIn: 360000 });
      res.status(200).json({ user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ errors: [{ msg: "Whoops! Looks like something is wrong from our side!" }] });
    }
  }
);

router.get("/", async (req, res) => {
  // Get token from header
  const token = req.header("x-auth-token");

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied!" });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, process.env.JWTSECRET);
    req.user = decoded.user;
    const user = await User.findById(decoded.user.id).select("-password");
    res.status(200).json({ user });
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid!" });
  }
});

module.exports = router;
