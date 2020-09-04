const express = require("express");
const cors = require("cors");

const addUser = require("./insert.db");
const readUser = require("./read.db");
const updateUser = require("./update.db");

const app = express();
app.use(express.json());
app.use(cors());

//Insert
app.post("/register", (req, res) => {

    try {
        const input = req.body;
        addUser.insertData(input);
        res.json({ Message: "Successfully Executed :)" })
    }
    catch (err) {
        res.sendStatus(500);
    }
});


//Read
app.post("/user", (req, res) => {

    try {
        const input = req.body;
        readUser.readData(input);
        res.json({ opr: true });

    }
    catch (err) {
        res.json({ opr: false });
    }
});


//Update
app.post("/forgotpassword", (req, res) => {

    try {
        const input = req.body;
        updateUser.updateData(input);
        res.json({ Message: "Successfully Executed :) " });
    }
    catch (err) {
        res.sendStatus(500);
    }
});


const PORT = process.env.PORT || 3000
app.listen(PORT);
console.log(`Server is running on Port: ${PORT}.`);

