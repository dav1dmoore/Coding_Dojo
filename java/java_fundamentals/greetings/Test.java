import java.util.Date;

public class Test {
    public static void main(String[] args){
        System.out.println("Hello World!");

        Integer myNum = 33;
        String myString = myNum.toString();
        System.out.println(myString);
        System.out.println(myNum > 50 ? "Larger!" : "Smaller!");

        switch(myNum){
            case 33: System.out.println("Thirty Big Three");
            break;
            default: System.out.println("Not a good number");
        }

        String ninja = "Coding Dojo";
        int ninjaLength = ninja.length();
        System.out.println(ninja.length());
        System.out.println(ninjaLength);
        System.out.println(new Date());

        int[] myArray;
        myArray = new int[5];
        myArray[0] = 2;
        System.out.println(myArray[1]);

        String[] fruits = new String[5];
        System.out.println(fruits[0]);
    }
}