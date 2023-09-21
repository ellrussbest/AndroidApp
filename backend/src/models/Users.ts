import mongoose from "mongoose";

const Schema = mongoose.Schema;

const usersSchema = new Schema({});

export const Users = mongoose.model("Users", usersSchema);
