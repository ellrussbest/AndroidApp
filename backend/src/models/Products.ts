import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productsSchema = new Schema({});

export const Products = mongoose.model("Products", productsSchema);
