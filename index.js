import express from "express";

const app = express();
const port = 4000;

app.get("/api/health", (request, response) => {
  response.json({ message: `api health running on ${port}` });
});

app.post("/create/todo", (request, response) => {
  response.json({ message: `you are calling post  ${port}` });
});

app.listen(port, () => {
  console.log(`server is running, on port ${port}`);
});
