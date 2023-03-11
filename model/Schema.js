const mongoose = require("mongoose");

const wordSchema = new mongoose.Schema({
    value: String,
})

const wordModel = mongoose.model("Word", wordSchema);

module.exports = {wordModel};