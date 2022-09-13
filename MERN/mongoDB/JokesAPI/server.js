const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const app = express();

const port = 8000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require("./server/config/mongoose.config");

require("./server/routes/jokes.routes")(app);

app.listen(port, () => console.log(`listening on port ${port}`));