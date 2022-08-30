class Ninja {
    constructor(name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(`My name is ${this.name}`);
    }

    showStats(){
        return `The ninja's name is ${this.name}, his strength is ${this.strength}, and his health is ${this.health}`;
    }

    drinkSake(){
        this.health
        return this.health += 10;
    }
}


const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
console.log(ninja1.showStats());
console.log(ninja1.drinkSake())
