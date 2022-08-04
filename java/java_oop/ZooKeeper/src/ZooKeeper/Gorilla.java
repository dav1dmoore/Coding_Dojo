package ZooKeeper;

public class Gorilla extends Mammal {
	
	public void throwThings() {
		super.throwThings();
		System.out.println("The Gorilla starts throwing things at people!");
	}
	

	public void eat() {
		super.eat(10);
		System.out.println("The Gorilla starts snacking on bananas and is happy!");
	}
	
	public void climb() {
		System.out.println("The Gorilla starts climbing the tree!");
		super.climb();
	}

}
