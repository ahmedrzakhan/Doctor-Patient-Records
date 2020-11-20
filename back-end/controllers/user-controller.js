const bcrypt = require("bcryptjs");
const User = require("./../models/User");
const { validationResult } = require("express-validator");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }

  const emailExists = await User.findOne({ email: email });

  if (emailExists) {
    return res.status(400).send("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, await bcrypt.genSalt(10));

  const user = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    res.send({ user: savedUser, message: "User registered successfully" });
  } catch (err) {
    res.status(400).send(err);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.isArray() });
  }

  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(400).send("Email or password is incorrect");
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) return res.status(400).send("Invalid password");

  res.send({ user, message: "Logged in successfully" });
};

module.exports = { registerUser, loginUser };
