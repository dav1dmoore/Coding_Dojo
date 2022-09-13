const express = require("express");
const app = express();

// This will fire our mongoose.connect statement to initialize our database connection
require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
const AllMyBookRoutes = require("./routes/book.routes");
AllMyBookRoutes(app);

app.listen(8000, () => console.log("The server is all ready to go and is calling up on port 8000"));
