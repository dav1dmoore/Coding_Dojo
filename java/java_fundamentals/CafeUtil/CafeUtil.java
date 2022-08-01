//Methods File
import java.util.ArrayList;
import java.text.NumberFormat;

public class CafeUtil {
    
    public int getStreakGoal(int numOfWeeks){
        int count = 0;
        for(int i = 0; i <= numOfWeeks; i++){
            count += i;
        }
        return count;
    }

    public double getOrderTotal(double[] prices){
        double count = 0;
        for(int i = 0; i < prices.length; i++){
            count += prices[i];
        }
        return count;
    }

    public void displayMenu(ArrayList<String> menuitems){
        for(int i = 0; i < menuitems.size(); i++){
            System.out.println(i + " " + menuitems.get(i));
        }
    }

    public void addCustomer(ArrayList<String> customers){
        System.out.println("Please enter your name:");
        String userName = System.console().readLine();
        System.out.println("Hello, " + userName);
        System.out.println("There are " + customers.size() + " people in front of you.");
        customers.add(userName);
        System.out.println(customers);
    }

    public void printPriceChart(String product, double price, int maxQuantity){
        NumberFormat fmt = NumberFormat.getCurrencyInstance();
        for(int i = 1; i <= maxQuantity; i++){
            System.out.println(i + " - " + product + " " + fmt.format((price * i)));
        }
    }
}