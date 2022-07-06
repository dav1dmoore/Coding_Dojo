
class User:
    def __init__(self,first_name, last_name,email,age, is_rewards_member=False,gold_card_points=100):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.account = { 
            "checking": BankAccount(.02, 0),
            "savings": BankAccount(.05, 0)
        }
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = gold_card_points

    def display_info(self):
        print(self.first_name, self.last_name)
        print(self.email)
        print(self.age)
        print(self.is_rewards_member)
        print(self.gold_card_points)

    def enroll(self):
        if(self.is_rewards_member):
            print('This individual is already a rewards member!')
        else:
            self.is_rewards_member = True

    def spend_points(self, amount):
        if(amount > self.gold_card_points):
            print('Not enough points available to spend')
        else:
            self.gold_card_points -= amount

    def make_deposit(self, amount):
        self.account.deposit(amount)
    
    def make_withdrawal(self, amount):
        self.account.withdraw(amount)
    
    def display_user_balance(self):
        print("Checking balance:", self.account["checking"].display_account_info(), "and Savings balance:", self.account["savings"].display_account_info())
        # self.account.display_account_info()

        return self

class BankAccount:
    accounts = []

    def __init__(self, interest_rate, balance=0):
        self.interest_rate = interest_rate
        self.balance = balance
        BankAccount.accounts.append(self)
    
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

# Were returning object, not a string. Need to return the balance string info, not an object
    def display_account_info(self):
        return f"{self.balance}"

    
    def yield_interest(self):
        self.balance += self.balance * self.interest_rate
        return self

new_user = User('John', 'Acres', 'ja@acres.com', 40)
new_user.account["checking"].deposit(100)

new_user.display_user_balance()
