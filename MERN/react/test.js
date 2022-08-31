class Athlete {
  constructor(name, county, sport, awards){
    this.name = name;
    this.country = county;
    this.sport = sport;
    this.awards = awards;
    this.energyLevel = 100;
    this.salary = 10000;
  }

  sayName(){
    console.log("Hi my name is " + this.name);
  }

  playSport(){
    this.energyLevel = 75;
  }

  takeIceBath(){
    this.energyLevel = 100;
  }
};

let mack = new Athlete('brittany', "USA", "Singer", "Gold Metals!");
console.log(mack);

class Swimmer extends Athlete {
  constructor(name, country, lapSpeed, awards){
    super(name, country, "Swimming", awards);
    this.lapSpeed = lapSpeed
  }

  swim(){
    console.log("Splasssh, T'm swimming!")
    this.energyLevel -= 10;
  }

}
let s1 = new Swimmer("Mike", "Germany", 10, "Gold Medals");
console.log(s1)

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");

console.log(reversed1)

const groceryList = Object.freeze([
  { "item": "carrots",           "haveIngredient": false },
  { "item": "onions",            "haveIngredient": true  },
  { "item": "celery",            "haveIngredient": false },
  { "item": "cremini mushrooms", "haveIngredient": false },
  { "item": "butter",            "haveIngredient": true  }
]);

const addThyme = [...groceryList, { "item": "thyme", "haveIngredient": true}];
console.log(addThyme);

const nowThyme = groceryList.concat([{"item": "thyme", "haveIngredient": true}])

let nums = [10, 2, 7, 99, 56, 22, 100];

console.log(nums.sort((a, b) => a-b));