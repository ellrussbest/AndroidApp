import mongoose from "mongoose";

const Schema = mongoose.Schema;

const orderItemsSchema = new Schema({});

export const OrderItems = mongoose.model("OrderItems", orderItemsSchema);
