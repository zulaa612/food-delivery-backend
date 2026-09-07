const router = express.Router();

router.post("/", async (request, response) => {
  response.status(200).json({ message: "food category post", user: user });
}); //create

router.delete("/", async (request, response) => {
  response.status(200).json({ message: "food category delete", user: user });
}); //create

router.put("/", async (request, response) => {
  response.status(200).json({ message: "food category update", user: user });
}); //create

router.get("/", async (request, response) => {
  response.status(200).json({ message: "food category post", user: user });
}); //create
