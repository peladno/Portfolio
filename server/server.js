import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.set("views", "./views");
app.set("view engine", "ejs");

//API
app.post(
  "/send",
  async(req, (res) => {
    try {
      const { fullName, email, message } = req.body;
      res.json({ msg: "server" });
    } catch (error) {
      res.status(404).json({ msg: error });
    }
  })
);

const server = app.listen(PORT, () => {
  console.log(`Server http on ${PORT}...`);
});
server.on("error", (error) => console.log("Error on server", error));
