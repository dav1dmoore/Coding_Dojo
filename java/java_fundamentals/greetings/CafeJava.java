public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        String displayNotReady = ", your order is not ready";

        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double dripCoffee = 2.5;
        double latte = 4.0;
        double cappucino = 5.5;
    
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";
    
        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = false;
        boolean isReadyOrder3 = true;
        boolean isReadyOrder4 = true;
    
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println(generalGreeting + customer1); // Displays "Welcome to Cafe Java, Cindhuri"
    	// ** Your customer interaction print statements will go here ** //
        System.out.println(customer1 + pendingMessage);
        if(isReadyOrder1){
            System.out.println(customer1 + readyMessage);
            System.out.println(displayTotalMessage + dripCoffee);
            } else {
                System.out.println(customer1 + displayNotReady);
            }
        
        if(isReadyOrder2){
            System.out.println(customer4 + readyMessage);
            System.out.println(displayTotalMessage + cappucino);
        } else {
            System.out.println(customer4 + displayNotReady);
        }

        System.out.println(displayTotalMessage + (latte * 2));
        if(isReadyOrder2){
            System.out.println(customer2 + readyMessage);
            System.out.println(displayTotalMessage + (latte * 2));
        } else {
            System.out.println(customer2 + displayNotReady);
        }

        System.out.println(displayTotalMessage + (latte - dripCoffee));
    }
}
