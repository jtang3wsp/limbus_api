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

const idData = await Identity.find({}, "-_id").lean();
const egoData = await EGO.find({}, "-_id").lean();

mongoose.connection.close();

// Order fields
const identities = idData.map((id) => {
  return {
    name: id.name,
    sinner: id.sinner,
    rarity: id.rarity,
    HP: id.HP,
    speed: id.speed,
    defenseModifier: id.defenseModifier,
    resistances: id.resistances,
    staggerThresholds: id.staggerThresholds,
    skills: id.skills,
    passives: id.passives,
  };
});

const egos = egoData.map((ego) => {
  return {
    name: ego.name,
    ego: ego.ego,
    sinner: ego.sinner,
    classification: ego.classification,
    resistances: ego.resistances,
    sinCost: ego.sinCost,
    skills: ego.skills,
    passive: ego.passive,
  };
});

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
app.get("/api/identities/:sinners", (req, res) => {
  const { sinners } = req.params;
  const sinnerNames = sinners.split(",");
  const sinnerIDs = identities.filter((identity) =>
    sinnerNames.some((name) => identity.name.toLowerCase().includes(name))
  );
  res.send(sinnerIDs);
});

// Get all egos for a specific sinner
app.get("/api/egos/:sinners", (req, res) => {
  const { sinners } = req.params;
  const sinnerNames = sinners.split(",");
  const sinnerEGOs = egos.filter((ego) =>
    sinnerNames.some((name) => ego.sinner.toLowerCase().includes(name))
  );
  res.send(sinnerEGOs);
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
