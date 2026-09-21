import { User } from "../../schemas/user-schema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const SALT_ROUND = 10;

const JWT_SECRET = process.env.JWT_SECRET 
const signAuthToken = (user) => {
  return jwt.sign(
    { userId: user._id, email: user.email, role: user.role },
    JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );
};

const publicUser = (user) => ({
  _id: user._id,
  email: user.email,
});

export const loginController = async (request, response) => {
  try {
    const { email, password } = request.body;
    console.log(email, password);
    const user = await User.findOne({ email: email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return response.status(401).json({ message: "wrong email or password" });
    }
    response.status(200).json({
      message: "user found",
      user: publicUser(user),
      token: signAuthToken(user),
    });
  } catch (err) {
    response.status(500).json({ message: "Internal Server Error", error: err });
  }
};

export const signupController = async (request, response) => {
  try {
    const { email, password, role } = request.body;

    const user = await User.create({
      email,
      role,
      password: await bcrypt.hash(password, SALT_ROUND),
    });


    response.status(201).json({ message: "user created", user: user });
  } catch (err) {
    response.status(500).json({ message: "Internal Server Error", error: err });
  }
};
