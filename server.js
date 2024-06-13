import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Identity from "./models/identityModel.js";
import EGO from "./models/egoModel.js";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

// Load database into memory
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log(error));

const identities = await Identity.find({}, "-_id");
const egos = await EGO.find({}, "-_id");

mongoose.connection.close();

// temp
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Get identities
app.get("/api/identities", (req, res) => {
  res.send(identities);
});

// Get egos
app.get("/api/egos", (req, res) => {
  res.send(egos);
});

// Get all identities for a specific sinner
app.get("/api/identities/:sinner", (req, res) => {
  const { sinner } = req.params;
  const name = sinner.toLowerCase();
  const sinnerIDs = identities.filter((identity) =>
    identity.name.toLowerCase().includes(name)
  );
  res.send(sinnerIDs);
});

// Get all egos for a specific sinner
app.get("/api/egos/:sinner", (req, res) => {
  const { sinner } = req.params;
  const name = sinner.toLowerCase();
  const sinnerEGOs = egos.filter((ego) => ego.sinner.toLowerCase() === name);
  res.send(sinnerEGOs);
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
