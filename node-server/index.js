const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://shaun:innobytes@innobytes.jjsu5sz.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("db connected");
}

const industriesSchema = new mongoose.Schema({
  index: Number,
  name: String,
  bg: String,
  p1: String,
  p2: String,
  p3: String,
  whatwedo: [String],
});
const Industry = mongoose.model("industries", industriesSchema);

const server = express();

server.use(cors());
server.use(bodyParser.json());

server.post("/industries", async (req, res) => {
  let industry = new Industry();
  industry.index = req.body.id;
  industry.name = req.body.name;
  industry.bg = req.body.bg;
  industry.p1 = req.body.p1;
  industry.p2 = req.body.p2;
  industry.p3 = req.body.p3;
  industry.whatwedo = req.body.whatwedo;

  const result = await industry.save();
  console.log(req.body);
  res.json(req.body);
});

server.get("/demo", (req, res) => {
  res.send("hello");
});

server.listen(8080, () => {
  console.log("server started");
});
