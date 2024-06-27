import mongoose from "mongoose";

// schema
const identitySchema = new mongoose.Schema({
  name: String,
  sinner: String,
  rarity: Number,
  // season: String,
  HP: Number,
  speed: { min: Number, max: Number },
  defenseModifier: Number,
  resistances: {
    bluntResistance: Number,
    pierceResistance: Number,
    slashResistance: Number,
  },
  staggerThresholds: [Number],
  skills: [
    {
      _id: false,
      skillName: String,
      basePower: Number,
      coinPower: Number,
      numCoins: Number,
      skillType: String,
      sinType: String,
      modifier: Number,
      attackWeight: { min: Number, max: Number },
      skillDescription: String,
    },
  ],
  passives: {
    combat: {
      passiveName: String,
      passiveSinType: String,
      passiveCost: { costType: String, value: Number },
      passiveDescription: String,
    },
    support: {
      passiveName: String,
      passiveSinType: String,
      passiveCost: { costType: String, value: Number },
      passiveDescription: String,
    },
    extra: {
      passiveName: String,
      passiveDescription: String,
    },
  },
});

identitySchema.index({ name: 1 }, { unique: true });

export default mongoose.model("Identity", identitySchema);
