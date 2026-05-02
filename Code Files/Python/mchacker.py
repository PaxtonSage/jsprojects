import mouse, keyboard, time, sys

run = False

def armor():
    keyboard.press("1")
    mouse.click("right")
    time.sleep(0.1)
    keyboard.press("2")
    mouse.click("right")
    time.sleep(0.1)
    keyboard.press("3")
    mouse.click("right")
    time.sleep(0.1)
    keyboard.press("4")
    mouse.click("right")

while True:
    if keyboard.is_pressed("j"):
        armor()
