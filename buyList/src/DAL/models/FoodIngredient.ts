import mongoose from "mongoose";

const ingredientScehma = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  calKg: {
    type: Number,
  },
  calnumItems: {
    type: Number,
  },
});

export default mongoose.model("ingredients", ingredientScehma);
