//Test File With the Main Method
import java.util.ArrayList;
import java.util.Arrays;

public class TestCafe {
    public static void main(String[] args){

        //create instance of CafeUtil Class
        CafeUtil cafeApp = new CafeUtil();

        int streakGoal = cafeApp.getStreakGoal(10);
        System.out.println(streakGoal);

        double[] lineItems = {3.5, 1.5, 4.0, 4.5};
        double getOrderTotal = cafeApp.getOrderTotal(lineItems);
        System.out.println("----- Order Total Test-----");
        System.out.printf("Order total: %s \n\n", cafeApp.getOrderTotal(lineItems));
        
        // System.out.println("----- Display Menu Test-----");
        
        ArrayList<String> menu = new ArrayList<String>();
        menu.add("drip coffee");
        menu.add("cappuccino");
        menu.add("lattee");
        menu.add("mocha");

        cafeApp.displayMenu(menu);

        // System.out.println("\n----- Add Customer Test-----");

        // ArrayList<String> customers = new ArrayList<String>();
        // // --- Test 4 times ---
        // for (int i = 0; i < 4; i++) {
        //     cafeApp.addCustomer(customers);
        //     System.out.println("\n");
        // }

        cafeApp.printPriceChart("Columbian Coffee Grounds", 15.0, 3);
    }
}