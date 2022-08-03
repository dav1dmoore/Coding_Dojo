public class Exceptions {
    
    public static void main(String args[]){
        int nums[] = {10,20,30,40,50};
    try {    
        System.out.println(nums[10]);
    } catch (Exception error){
        System.out.println(error);
    } finally {
        System.out.println("This finally statement ALWAYS triggers!");
    }
    }
}
