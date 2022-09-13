const mongoose = require("mongoose");

const HeroSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Name is required!"],
        minLength: [2, "Name must be atleast 2 characters!"]
    },

    rating: {
        type: Number,
        required: [true, "Rating is required!"],
        minLength: [1, "Pick a number from 1 to 10!"],max: [10, "Pick a number from 1 to 10!"]
    },

    img: {
        type: String,
        required: [true, "Image url is required!"]
    }

});

//Register our new collection (Scheme)

const Hero = mongoose.model("Hero", HeroSchema);

module.exports = Hero;