const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Get all tasks
router.post("/", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    const tasks = user.tasks;
    return res.status(200).json({ tasks });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error });
  }
});

// Create a task
router.post("/create", async (req, res) => {
  const { title, email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    const task = {
      title,
    };

    user.tasks.push(task);
    user.save();
    return res.status(201).json({ user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Whoops seems like a trouble!" });
  }
});

module.exports = router;
