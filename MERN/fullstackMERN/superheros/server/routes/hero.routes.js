//import controller
const heroController = require("../controllers/hero.controller")

// Define Routes
module.exports = app => {

    //create new hero app.route
    app.post("/api/hero/new", heroController.createHero)

    //Read (display) all heros app get
    app.get("/api/heros", heroController.findAllHeros)

    //Read display one hero app.get
    app.get("/api/hero/:id", heroController.displayHero)

    //Update an hero app.put
    app.put("/api/hero/update/:id", heroController.updateHero)

    //Delete Destroy a hero
    app.delete("/api/hero/delete/:id", heroController.deleteHero)
}