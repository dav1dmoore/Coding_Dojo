function pizzaOven (crustType, sauceType, cheese, toppings){
    let pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;

}
let meatPizza = pizzaOven('deep dish', 'traditional', ['mozzarella'], ['pepperoni', 'sausage']);
console.log(meatPizza);

let gardenPizza = pizzaOven('hand tossed', 'marinara', ['mozzarella', 'feta'], ['mushrooms','olives', 'onions']);
console.log(gardenPizza);

let pepperoniPizza = pizzaOven('deep dish', 'marinara', ['american cheese', 'mozzarella'], 'pepperoni');
console.log(pepperoniPizza);

let sausagePizza = pizzaOven('thin crust', 'traditional', ['feta', 'mozzarella', 'american'], 'sausage');
console.log(sausagePizza);

var crust = ['thin crust', 'hand tossed', 'thick crust', 'deep dish'];
var sauce = ['marinara', 'traditional', 'pesto'];
var cheese = ['mozzarella', 'american', 'feta'];
var ingredients = ['pepperoni', 'sausage', 'onions', 'olives', 'green peppers', 'bacon', 'pineapple'];

let randomPizza = pizzaOven(crust[Math.floor(Math.random()*crust.length)], sauce[Math.floor(Math.random()*sauce.length)], cheese[Math.floor(Math.random()*cheese.length)], ingredients[Math.floor(Math.random()*ingredients.length)]);
console.log(randomPizza);

