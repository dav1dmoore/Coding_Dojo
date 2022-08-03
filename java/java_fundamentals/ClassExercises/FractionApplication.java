public class FractionApplication {
    public static void main(String[] arg){
        int numerator = 3;
        int denominator = 4;
        Fraction fraction1 = new Fraction(numerator, denominator);
        Fraction fraction2 = new Fraction(1, 2);

        // Fraction result = fraction1.add(fraction2);
        // System.out.println(fraction1 + " + " + fraction2 + " = " + result);
        // System.out.println(fraction1.toString());

        // result = fraction1.multiply(fraction2);
        // System.out.println(result);

        Fraction fraction3 = new Fraction();
        fraction3.setDenominator(10);
        System.out.println(fraction3.getDenominator());
        Fraction result1 = fraction1.add(4, 8);
        System.out.println( fraction1 + " + 4/8 = " + result1);
    }
}
