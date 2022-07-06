class BankAccount:
    def __init__(self, interest_rate, balance=0):
        self.interest_rate = interest_rate
        self.balance = balance
    
    def deposit(self, amount):
        self.balance += amount
        return self
    
    def withdraw(self, amount):
        if(amount > self.balance):
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5
        else:
            self.balance -= amount
        return self

    def display_account_info(self):
        print(f"Balance: {self.balance}")
        return self

    
    def yield_interest(self):
        self.balance += self.balance * self.interest_rate
        return self


user1 = BankAccount(.1, 1000)
user2 = BankAccount(.1, 10000)

user1.deposit(1001).deposit(1001).deposit(1001).withdraw(4000).yield_interest()
user1.display_account_info()

user2.deposit(1000).deposit(1000).withdraw(1).withdraw(1).withdraw(1).withdraw(1).yield_interest()
user2.display_account_info()

