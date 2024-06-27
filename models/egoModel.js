import mongoose from "mongoose";

// schema
const egoSchema = new mongoose.Schema({
  name: String,
  ego: String,
  sinner: String,
  classification: String,
  // season: String,
  resistances: {
    wrath: Number,
    lust: Number,
    sloth: Number,
    gluttony: Number,
    gloom: Number,
    pride: Number,
    envy: Number,
  },
  sinCost: {
    wrath: Number,
    lust: Number,
    sloth: Number,
    gluttony: Number,
    gloom: Number,
    pride: Number,
    envy: Number,
  },
  skills: [
    {
      _id: false,
      skillType: String,
      basePower: Number,
      coinPower: Number,
      numCoins: Number,
      damageType: String,
      sinType: String,
      // gll no offense mod
      offenseModifier: Number,
      attackWeight: { min: Number, max: Number },
      sanityCost: Number,
      skillDescription: String,
    },
  ],
  passive: {
    passiveName: String,
    passiveDescription: String,
  },
});

egoSchema.index({ name: 1 }, { unique: true });

export default mongoose.model("Ego", egoSchema);
