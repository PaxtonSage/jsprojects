import pyautogui, keyboard, time, sys
#Base Statements
n = 0, 0
m = 0, 0
run = 0
sys.setrecursionlimit(10000)
pyautogui.PAUSE = 0.001

# Clicking & Ending
def ran():
    global run
    while run == 1:
        if keyboard.is_pressed("v"):
            run = 0
        if keyboard.is_pressed("p"):
            sys.exit()
        pyautogui.click(n)
        pyautogui.click(m)
        ran()
#Set-Up
while True:
    if keyboard.is_pressed("p"):
        sys.exit()

    if keyboard.is_pressed("n"):
        currentMouseX, currentMouseY = pyautogui.position()
        n = pyautogui.position()
        m = pyautogui.position()

    if keyboard.is_pressed("m"):
        currentMouseX, currentMouseY = pyautogui.position()
        m = pyautogui.position()

    if keyboard.is_pressed("b"):
        if n != (0, 0):
            run = 1
            ran()
