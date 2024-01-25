const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");
const chatRoute = require("./Routes/chatRoute");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);

app.get("/", (req, res) => {
    res.send('This is our chat API')
})

const port = process.env.PORT || 9999;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) => {
    console.log(`app running on port: ${port}`)
});

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Mongo connected'))
.catch(error => console.error("Mongo error: ", error.message));

