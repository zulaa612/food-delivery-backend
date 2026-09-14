import { User } from "../../schemas/user-schema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const SALT_ROUND = 10;

const JWT_SECRET = "test";
const signAuthToken = (user) => {
  return jwt.sign({ email: user.email, password: user.password }, JWT_SECRET, {
    expiresIn: "1d",
  });
};

export const loginController = async (request, response) => {
  try {
    const { email, password } = request.body;
    console.log(email, password);
    const user = await User.findOne({ email: email });

    if (!user) {
      response.status(404).json({ message: "user not found" });
    }
    console.log("user password:", user.password);
    console.log("password:", password);
    const isPasswordMatching = await bcrypt.compare(password, user.password);

    if (!isPasswordMatching) {
      response.status(401).json({ message: "Password did not match" });
    }
    console.log("Is Password Matching", isPasswordMatching);

    const token = signAuthToken(user);
    response
      .status(200)
      .json({ message: "user found", user: user, token: token });
  } catch (err) {
    response.status(500).json({ message: "Internal Server Error", error: err });
  }
};

export const signupController = async (request, response) => {
  try {
    const { email, password } = request.body;
    const hashedPassword = await bcrypt.hash(password, SALT_ROUND);
    const user = await User.create({ email, password: hashedPassword });

    console.log("Hashed password:", hashedPassword);
    console.log("Password:", password);

    response.status(201).json({ message: "user created", user: user });
  } catch (err) {
    response.status(500).json({ message: "Internal Server Error", error: err });
  }
};
