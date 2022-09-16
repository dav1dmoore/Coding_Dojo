// Method names to be used

//1 Create Hero


//2 find All users

//3 display Hero

//4 updated Hero

//5 delete Hero

const Hero = require("../models/hero.model");

//1 Create Hero

module.exports.createHero = (req, res) => {
    Hero.create(req.body)
    .then((newHero) => {res.json({results: newHero})})
    .catch(err => res.status(400).json({err: err}))
}

//2 Find all heros

module.exports.findAllHeros = (req, res) => {
    Hero.find()
    .then((allHeros) => {res.json({results: allHeros})})
    .catch(err => res.json({err:err}))
} 

module.exports.displayHero = (req, res) => {
    Hero.findOne({_id: req.params.id})
    .then((hero) => {res.json({results: hero})})
    .catch(err => res.json({err:err}))
}

module.exports.updateHero = (req, res) => {
    Hero.findOneAndUpdate({_id:req.params.id}, req.body, {
        new: true,
        runValidators: true
    })
    .then((updatedHero) => {res.json({results: updatedHero})})
    .catch(err => {res.json({err:err})})
}

module.exports.deleteHero = (req, res) => {
    Hero.deleteOne({_id:req.params.id})
    .then((deletedHero) => {res.json({results: deletedHero})})
    .catch((err) => {res.json({err:err})})
}