package phone_interfaces_and_abstract_demo;

public abstract class Phone {
	private String versionNumber;
	
	private int batterPercentage;
	
	private String carrier;
	
	private String ringTone;

	public Phone(String versionNumber, int batterPercentage, String carrier, String ringTone) {
		this.versionNumber = versionNumber;
		this.batterPercentage = batterPercentage;
		this.carrier = carrier;
		this.ringTone = ringTone;
	}

	public String getVersionNumber() {
		return versionNumber;
	}

	public void setVersionNumber(String versionNumber) {
		this.versionNumber = versionNumber;
	}

	public int getBatterPercentage() {
		return batterPercentage;
	}

	public void setBatterPercentage(int batterPercentage) {
		this.batterPercentage = batterPercentage;
	}

	public String getCarrier() {
		return carrier;
	}

	public void setCarrier(String carrier) {
		this.carrier = carrier;
	}

	public String getRingTone() {
		return ringTone;
	}

	public void setRingTone(String ringTone) {
		this.ringTone = ringTone;
	}
	
	
	
	

}
