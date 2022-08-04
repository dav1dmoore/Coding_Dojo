package olympics_inheritance_demo;

public class BasketballPlayer extends Olympian{
	
	public double verticalJumpHeight;
	
	public BasketballPlayer(String firstName, double verticalJumpHeight) {
		super(firstName);
		this.verticalJumpHeight = verticalJumpHeight;
		
	}
	
	public void ShootingBall() {
		this.energyLevel -= 5;
	}
}
