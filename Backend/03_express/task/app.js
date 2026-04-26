const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// CImport MongoDB  + Mongoose
const mongoose = require("mongoose");

const { MongoMemoryServer } = require("mongodb-memory-server");

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));



// Set EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));



// Create Schema
const taskSchema = new mongoose.Schema({
    task: String,
    description: String
});

// Create Model
// Collection name will become "tasks"
const Task = mongoose.model("Task", taskSchema);

/*
========================
ROUTES
========================
*/

// Show form page + all tasks
app.get("/", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.render("form", { tasks });
    } catch (err) {
        res.send(err.message);
    }
});


// Add new task
app.post("/add-task", async (req, res) => {
    try {
        await Task.create({
            task: req.body.task,
            description: req.body.description
        });

        res.redirect("/");
    } catch (err) {
        res.send(err.message);
    }
});


// Show all tasks page
app.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.render("tasks", { tasks });
    } catch (err) {
        res.send(err.message);
    }
});


// Delete task
app.post("/delete/:id", async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.redirect("/tasks");
    } catch (err) {
        res.send(err.message);
    }
});


// Show edit page
app.get("/edit/:id", async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        res.render("edit", {
            task: task
        });
    } catch (err) {
        res.send(err.message);
    }
});


// Update task
app.post("/edit/:id", async (req, res) => {
    try {
        await Task.findByIdAndUpdate(req.params.id, {
            task: req.body.task,
            description: req.body.description
        });

        res.redirect("/tasks");
    } catch (err) {
        res.send(err.message);
    }
});

// Start MongoDB Memory Server
// Then connect Mongoose
// Then start Express server
async function startServer() {
    try {

        // Create temporary MongoDB server
        const mongod = await MongoMemoryServer.create({
    binary: {
        version: "6.0.14"
    }
});

        // Get connection URI
        const uri = mongod.getUri();

        // Connect mongoose
        await mongoose.connect(uri);

        console.log("MongoDB connected");

        // Start Express server
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });

    } catch (err) {
        console.log("MongoDB Error:", err);
    }
}


// Run server
startServer();