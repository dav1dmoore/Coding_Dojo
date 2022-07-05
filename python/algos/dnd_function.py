from random import randint

def roll_dice(number=1, sides=20):
    #return a whole number (integer) between 1 and 20
    sum = 0
    for i in range(0, number):
        sum += randint(1,sides)
    return sum

print(roll_dice(2, 6))

def roll_character(character_name):
    new_character = {"name": character_name}

    # new_character["STR"] = roll_dice(3,6)
    # new_character["CON"] = roll_dice(3,6)
    # new_character["DEX"] = roll_dice(3,6)
    # new_character["INT"] = roll_dice(3,6)
    # new_character["WIS"] = roll_dice(3,6)
    # new_character["CHA"] = roll_dice(3,6)

    stats = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']

    for stat in stats:
        new_character[stat] = roll_dice(3,6)

    return new_character

print(roll_character("Trogdor the barbarian"))