package ZooKeeper;

public class MammalTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Mammal mammal1 = new Mammal();
		Gorilla gorilla1 = new Gorilla();
		Bat bat1 = new Bat();
		mammal1.displayEnergy();
		gorilla1.displayEnergy();
		gorilla1.throwThings();
		gorilla1.displayEnergy();
		gorilla1.throwThings();
		gorilla1.displayEnergy();
		gorilla1.throwThings();
		gorilla1.displayEnergy();
		gorilla1.eat();
		gorilla1.displayEnergy();
		gorilla1.eat();
		gorilla1.displayEnergy();
		gorilla1.climb();
		gorilla1.displayEnergy();
		bat1.displayEnergy();
		bat1.attackTown();
		bat1.displayEnergy();
		bat1.attackTown();
		bat1.displayEnergy();
		bat1.attackTown();
		bat1.displayEnergy();
		bat1.eat();
		bat1.displayEnergy();
		bat1.eat();
		bat1.displayEnergy();
		bat1.fly();
		bat1.displayEnergy();
		bat1.fly();
		bat1.displayEnergy();
	}

}
