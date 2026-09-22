import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export const requireToken = (request, response, next) => {
  const token = request.headers.authorization.split(" ")[1] || null;

  if (!token) {
    return response.status(401).json({ message: "Token required" });
  }
  try {
    const user = jwt.verify(token, JWT_SECRET);
    request.user = user;
    next();
    console.log("this is user:", user);
  } catch (err) {
    console.log(err);
    response.status(401).json({ message: "Invalid or expired token" });
  }
};
