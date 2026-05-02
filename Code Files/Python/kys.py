import keyboard, time, sys

IsTrue = False



def Death():
    while IsTrue == True:
        if keyboard.is_pressed("q"):
            sys.exit()
        keyboard.send("enter")
        keyboard.write("cum")
        keyboard.send("enter")
        time.sleep(1)


while True:
    if keyboard.is_pressed("e"):
        IsTrue = True
        Death()
