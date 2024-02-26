import mongoose from "mongoose";

// schema
const identitySchema = new mongoose.Schema({
  name: String,
  rarity: Number,
  season: Number,
  HP: Number,
  speed: { min: Number, max: Number },
  defenseLevel: Number,
  slashResistance: Number,
  pierceResistance: Number,
  bluntResistance: Number,
  skills: [
    {
      skillName: String,
      basePower: Number,
      coinPower: Number,
      numCoins: Number,
      skillDescription: String,
      offenseLevel: Number,
      sinType: String,
      damageType: String,
    },
  ],
  passives: [
    {
      passiveName: String,
      passiveSinType: String,
      passiveCost: { costType: String, value: Number },
      passiveDescription: String,
    },
  ],
  faction: String,
});

identitySchema.index({ name: 1 }, { unique: true });

export default mongoose.model("Identity", identitySchema);
