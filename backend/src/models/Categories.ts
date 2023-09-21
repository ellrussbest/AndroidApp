import mongoose from "mongoose";

const Schema = mongoose.Schema;

const categorySchema = new Schema({});

export const Categories = mongoose.model("Categories", categorySchema);
