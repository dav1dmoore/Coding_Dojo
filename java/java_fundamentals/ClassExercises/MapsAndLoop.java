import java.util.HashMap;
import java.util.Set;

public class MapsAndLoop {
    public static void main(String args[]){
        HashMap<String, String> studentHash = new HashMap<String, String>();
        studentHash.put("alex@miller.com", "Alex");
        studentHash.put("kyle@miller.com", "Kyle");
        studentHash.put("coren@miller.com", "Coren");
        String alex = studentHash.get("alex@miller.com");
        System.out.println(alex);

        Set <String> keys = studentHash.keySet();

        for(String key : keys){
            System.out.println( key + " : " + studentHash.get(key) );
        }
        System.out.println( keys );
        studentHash.values();

    //Loops

        int[] nums = { 1,2,3,4,5,6,7};

        int j = 0;
        while (j < nums.length){
            
        }


        Methods linkMethod = new Methods();
        linkMethod.addTwoNumbers(5,5);
    }
    
}