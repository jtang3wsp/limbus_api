import mongoose from "mongoose";

// schema
const egoSchema = new mongoose.Schema({
  ego: String,
  sinner: String,
  classification: String,
  season: String,
  wrathResistance: Number,
  lustResistance: Number,
  slothResistance: Number,
  gluttonyResistance: Number,
  gloomResistance: Number,
  prideResistance: Number,
  envyResistance: Number,
  sinCost: [Number],
  skills: [
    {
      skillName: String,
      basePower: Number,
      coinPower: Number,
      skillDescription: String,
      offenseLevel: Number,
      attackWeight: Number,
      sinType: String,
      damageType: String,
      sanityCost: Number,
    },
  ],
  passiveName: String,
  passiveDescription: String,
});

egoSchema.index({ sinner: 1, ego: 1 }, { unique: true });

export default mongoose.model("EGO", egoSchema);
