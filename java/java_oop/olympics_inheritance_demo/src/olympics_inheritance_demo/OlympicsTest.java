package olympics_inheritance_demo;

public class OlympicsTest {
	public static void main(String[] args) {
		Olympian lebron = new Olympian("Lebron");
		// System.out.println(lebron.firstName);
		// lebron.displayInfo();
		
		BasketballPlayer p1 = new BasketballPlayer("Jordan", 45.8);
		System.out.println(p1.energyLevel);
		p1.ShootingBall();
		System.out.println(p1.energyLevel);
	}
}

