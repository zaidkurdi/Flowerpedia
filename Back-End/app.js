require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));    
db.once("open", () => console.log("connected successfully"));

app.use(express.json());
app.use(cors());

const flowersRoutes = require("./routes/flowers.js");
app.use("/api/flowers", flowersRoutes);

app.listen(3000, () => console.log("hello world"));
