public class BankAccountTest {
    public static void main(String[] args){
        BankAccount account = new BankAccount(0.0, 0.0);
        account.setCheckingBalance(10.0);
        System.out.println(account.getCheckingBalance());

        account.depositMoney("checking", 25.0);
        System.out.println(account.getCheckingBalance());
        account.setCheckingBalance(-5.0);
        System.out.println(account.getCheckingBalance());
        account.withdrawMoney("checking", 50.0);
        System.out.println(account.getCheckingBalance());
        account.accountBalances();
        System.out.println(account.getAccountNumber());
    }
}
