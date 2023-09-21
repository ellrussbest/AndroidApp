import mongoose from "mongoose";

const Schema = mongoose.Schema;

const orderSchema = new Schema({});

export const Orders = mongoose.model("Orders", orderSchema);
