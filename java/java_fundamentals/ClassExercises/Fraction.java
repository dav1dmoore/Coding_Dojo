public class Fraction {
    private int numerator;
    private int denominator;

    public Fraction(int numerator, int denominator){
        this.numerator = numerator;
        this.denominator = denominator;
    }

    public Fraction(){
        int numerator = 3;
        int denominator = 4;
    }

    public Fraction add( Fraction fraction2 ){
        int num = this.numerator * fraction2.getDenominator() + this.denominator * fraction2.getNumerator();
        int den = this.denominator * fraction2.getDenominator();
        Fraction result = new Fraction(num, den);
        return result;
    }

    public Fraction add( int num2, int den2){
        Fraction fraction2 = new Fraction(num2, den2);
        return add(fraction2);
    }

    public Fraction multiply(Fraction fraction2){
        int num = this.numerator * fraction2.getNumerator();
        int den = this.denominator * fraction2.getDenominator();
        Fraction result = new Fraction(num, den);
        return result;
    }

    public String toString(){
        return numerator + "/" + denominator;
    }

    public static Fraction add(int num1, int den1, int num2, int den2){
        Fraction fraction1 = new Fraction(num1, num2);
        Fraction fraction2 = new Fraction(num2, den2);
    }

    //Getters & Setters
    public int getNumerator(){
        return this.numerator;
    }

    public int getDenominator(){
        return this.denominator;
    }

    public void setNumerator(int num){
        this.numerator = num;
    }

    public void setDenominator(int den){
        this.denominator = den;
    }
}
