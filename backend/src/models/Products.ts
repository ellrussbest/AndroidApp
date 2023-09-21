import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productsSchema = new Schema({
  name: String,
  image: String,
  countInStock: {
    type: Number,
    required: true,
  },
});

export const Products = mongoose.model("Products", productsSchema);
