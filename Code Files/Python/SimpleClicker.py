import mouse, keyboard, sys, time

Run = False

while True:
    if Run == True:
#        mouse.click("left")
        keyboard.write("cum™")
        keyboard.press("enter")
        time.sleep(0.1)

    if keyboard.is_pressed("m"):
        Run = True

    if keyboard.is_pressed("n"):
        Run = False
    if keyboard.is_pressed("b"):
        sys.exit()
