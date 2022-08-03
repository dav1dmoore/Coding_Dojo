import java.util.Random;

import javafx.beans.binding.StringBinding;

public class BankAccount {
    private double checkingBalance;
    private double savingsBalance;
    private String accountNumber;
    private static int numberOfAccounts;
    private static double totalOfAccounts;

    public BankAccount(double checkingBalance, double savingsBalance){
        this.checkingBalance = checkingBalance;
        this.savingsBalance = savingsBalance;
        this.accountNumber = setAccountNumber();
        numberOfAccounts++;
    }

    private String createAccountNumber(){
        Random digital = new Random();
        String acctNum ="";
        for(int i = 1; i<=10; i++){
            acctNum += digital.nextInt(9) + 1;
        }
        System.out.println(acctNum);
        return acctNum;
    }

    //Getters & Setters
    public String getAccountNumber(){
        return this.accountNumber;
    }
    public String setAccountNumber(){
        this.accountNumber = createAccountNumber();
        return this.accountNumber;
    }
    public double getCheckingBalance(){
        return this.checkingBalance;
    }

    public double getSavingsBalance(){
        return this.savingsBalance;
    }

    public void setCheckingBalance(double amt){
        this.checkingBalance += amt;
        totalOfAccounts += amt;
    }
    public void setSavingsBalance(double amt){
        this.savingsBalance += amt;
        BankAccount.totalOfAccounts += amt;
    }
    public void depositMoney(String account, double amt){
        if(account == "checking"){
            setCheckingBalance(amt);
            totalOfAccounts += amt;
        } else if(account == "savings"){
            setSavingsBalance(amt);
            totalOfAccounts += amt;
        } else {

        }
    }

    public void withdrawMoney(String account, double amt){
        if(account == "checking"){
            if(this.checkingBalance >= amt){
                setCheckingBalance(-amt);
                totalOfAccounts -= amt;
            } else {
            }
        } else if(account == "savings"){
            if(this.savingsBalance >= amt){
            setSavingsBalance(-amt);
            totalOfAccounts -= amt;
            } else { }
        }
    }

    public String accountBalances(){
        double checking = getCheckingBalance();
        double savings = getSavingsBalance();
        System.out.println("The total balance for both accounts is: $" + (checking + savings));
        return "The total balance for both accounts is: $" + (checking + savings);
    }
}