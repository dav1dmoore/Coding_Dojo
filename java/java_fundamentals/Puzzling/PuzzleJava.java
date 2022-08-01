import java.util.Random;
import java.util.ArrayList;

public class PuzzleJava {
    Random randMachine = new Random();

    public ArrayList<Integer> getTenRolls(){
        ArrayList<Integer> rolls = new ArrayList<Integer>();
        for(int i = 1; i<=10; i++){
            rolls.add(randMachine.nextInt(20) + 1);
        }
        System.out.println(rolls);
        return rolls;
    }

    public char getRandomLetter(){
        ArrayList<Character> alphabet = new ArrayList<Character>();
        for(char c = 'A'; c <= 'Z'; c++){
            alphabet.add(c);
        }
        return alphabet.get(randMachine.nextInt(alphabet.size()));
    }

    public String randomPassword(){
        String newPassword = "";
        for(int i = 1; i <= 8; i++){
            newPassword += getRandomLetter();
        }
        System.out.println(newPassword);
        return newPassword;
    }

    public ArrayList<String> getNewPasswordSet(int amt){
        ArrayList<String> passwordSet = new ArrayList<String>();
        for(int i = 0; i < amt; i++){
            passwordSet.add(randomPassword());
        }
        System.out.println(passwordSet);
        return passwordSet;
    }
}