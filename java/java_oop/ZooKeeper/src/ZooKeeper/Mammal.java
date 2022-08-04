package ZooKeeper;

public class Mammal {
	protected int energy;
	
	public Mammal(){
		this.energy = 100;
	}
	
	public int displayEnergy() {
		System.out.println(this.energy);
		return this.energy;
	}
	public void changeEnergy(int amt) {
		this.energy += amt;
	}
	
	public void climb() {
		changeEnergy(-10);
	}
	
	public void eat(int amt) {
		changeEnergy(amt);
	}
	
	public void throwThings() {
		changeEnergy(-5);
	}
	
	
}
