class Cards {
    constructor(name, cost){
        this.name;
        this.cost;
    }
}

class Unit extends Cards {
    constructor(name, cost, resilience, power){
        super(name, cost);
        this.resilience = resilience;
        this.power = power;
    }

    attack(target){
        if(target instanceof Unit){
            target.resilience -= this.power;
            if(target.resilience <= 0){
                target.resilience = 0;
                console.log('This ninja lost!')
                return 'This Ninja Lost!'
            } else {
                return target.resilience;
            }
        } else {
            console.log('Target is not an instance of Unit!');
            return 'Not a Unit!'
        }
    }
}

class Effect extends Cards{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target){
        if(target instanceof Unit){
            if(this.stat == 'resilience'){
            return target.resilience += this.magnitude;
            } else {
                return target.power += this.magnitude;
            }
        } else {
            console.log('Target is not a unit!');
            return 'Target is not a unit!'
        }
    }
}

const redBeltNinja = new Unit('Red Belt Ninja', 3, 4, 3);
console.log(redBeltNinja)
const hardAlgo = new Effect('Hard Algo', 2, 'increase target\'s resilence by 3', 'resilience', 3);
hardAlgo.play(redBeltNinja);
console.log(redBeltNinja)
const blackBeltNinja = new Unit('Black Belt Ninja', 4, 4, 5);
console.log(blackBeltNinja)
const unhandledPromiseRejection = new Effect('Unhandled Promise Rejection', 1, 'reduce target\'s resilence by 2', 'resilience', -2);
unhandledPromiseRejection.play(redBeltNinja);
console.log(redBeltNinja)
const pairProgramming = new Effect('Pair Programming', 3, 'increase target\'s power by 2', 'power', 2);
pairProgramming.play(redBeltNinja);

redBeltNinja.attack(blackBeltNinja);
console.log(blackBeltNinja);
console.log(redBeltNinja);

