package olympics_inheritance_demo;

public class Olympian {
//olympian class represents an olympian
	//member variables
	public String firstName;
	public int energyLevel;
	
	public Olympian(String firstName){
		this.firstName = firstName;
		this.energyLevel = 100;
	}
	
	public void displayInfo() {
		System.out.printf("Player name: %s\nEnergy Level: %s", this.firstName, this.energyLevel);
	}
}
