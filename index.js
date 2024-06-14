const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/twinDB", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Successfully connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB", err);
    }
};

connectDB();

const sch = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mail: String,
});

const monmodel = mongoose.model("ITEMS", sch);

app.post("/post", async(req, res) => {
    console.log("Received request body:", req.body);

    const data = new monmodel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mail: req.body.mail
    });

    try {
        const val = await data.save();
        res.json(val);
    } catch (err) {
        console.error("Error saving to database:", err);
        res.status(500).send(err);
    }
});

app.listen(3000, () => {
    console.log("Server is running on Port 3000");
});
