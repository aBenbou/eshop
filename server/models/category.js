import mongoose from "mongoose";

const schema = new mongoose.Schema({});

export const Category = mongoose.model("Category", schema);