package ZooKeeper;

public class Bat extends Mammal {
	
	public Bat() {
		this.energy = 300;
	}
	
	public void fly() {
		System.out.println("Shooooooshhh!");
		super.changeEnergy(-50);
	}
	
	public void eat() {
		System.out.println("So-well");
		super.eat(25);
	}
	
	public void attackTown() {
		System.out.println("The town begins to burn! Roaarrr!");
		super.changeEnergy(-100);
	}
}
