import keyboard, time                                                                    

def repeat():                                                                           
    time.sleep(0.1)
    keyboard.write("👉👌")
    keyboard.press("enter")
while True:
    if keyboard.is_pressed("`"):
        repeat()           