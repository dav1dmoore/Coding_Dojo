package ZooKeeper;

public class Gorilla extends Mammal {
	
	public Gorilla() {
		// TODO Auto-generated constructor stub
		super.displayEnergy();
	}
	
	public void throwThings() {
		super.throwThings();
		System.out.println("The Gorilla starts throwing things at people!");
	}
	
	public void eat() {
		super.eat();
		System.out.println("The Gorilla starts snacking on bananas and is happy!");
	}
	
	public void climb() {
		System.out.println("The Gorilla starts climbing the tree!");
		super.climb();
	}

}
