package ZooKeeper;

public class Gorilla extends Mammal {
	
	public Gorilla() {
		// TODO Auto-generated constructor stub
		super.displayEnergy();
	}
	
	public void throwThings() {
		changeEnergy(-5);
		System.out.println("The Gorilla starts throwing things at people!");
	}
	
	public void eatBananas() {
		changeEnergy(10);
		System.out.println("The Gorilla starts snacking on bananas and is happy!");
	}
	
	public void climb() {
		System.out.println("The Gorilla starts climbing the tree!");
		changeEnergy(-10);
	}

}
