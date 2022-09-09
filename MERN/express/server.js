const express = require("express"); //created a variabled that will store express
const app = express();
const port = 8000;

//make sure lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const menuItems = [
    {name: "burger", price: 12.00},
    {name: "fries", price: 8.00},
];

//req short for request
// res short for response
app.get("/api", (req, res) => {
    res.json({ message: "Hello World, How are you? Anyone ready for lunch?"});
});


app.get("/api/menu", (req, res) => {
    res.json({
        count: menuItems.length,
        results: menuItems
    })
})

app.post("/api/menu", (req, res) => {
    menuItems.push(req.body)
    res.json({
        count: menuItems.length,
        results: menuItems,
    })
})

app.put("/api/menu/:id", (req, res)=>{
    menuItems[req.params.id] = req.body;
    res.json({
        count: menuItems.length,
        results: menuItems
    })
})

app.delete("/api/menu/:id", (req, res)=>{
    menuItems.splice(req.params.id, 1);
    res.json({
        count: menuItems.length,
        results: menuItems,
    });
});

// this needs to be below 
app.listen( port, ()=> console.log(`Listening on porting: ${port}`));