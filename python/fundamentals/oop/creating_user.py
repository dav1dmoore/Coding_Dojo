from hashlib import new


class User:

    def __init__(self,first_name, last_name,email,age, is_rewards_member=False,gold_card_points=100):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
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


new_user = User('John', 'Acres', 'ja@acres.com', 40)

print(new_user.gold_card_points)
new_user.gold_card_points = 100
new_user.spend_points(10)
print(new_user.gold_card_points)

new_user.enroll()
print(new_user.is_rewards_member)

new_user1 = User('Yukio', 'Rideb', 'dancingbear@gmail.com', 34)
new_user2 = User('Nixon', 'Isley', 'nixon@isley.com', 20)

new_user1.spend_points(50)
print(new_user1.gold_card_points)

new_user2.enroll()
print(new_user2.is_rewards_member)
new_user2.spend_points(80)
print(new_user2.gold_card_points)

new_user.display_info()
new_user1.display_info()
new_user2.display_info()

new_user.enroll()
new_user2.spend_points(50)

