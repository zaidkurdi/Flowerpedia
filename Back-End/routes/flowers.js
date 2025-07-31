const express = require("express");
const router = express.Router();
const Flower = require("../models/flower");

router.get("/", async (req, res) => {
	try {
		const flowers = await Flower.find();
		res.json(flowers);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			messege: error.message,
		});
	}
});

module.exports = router;
