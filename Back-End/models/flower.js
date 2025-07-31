const mongoose = require("mongoose");

const flowersSchema = new mongoose.Schema({
	image: String,
	title: String,
	description: String,
});

module.exports = mongoose.model("Flower", flowersSchema, "flowers");
