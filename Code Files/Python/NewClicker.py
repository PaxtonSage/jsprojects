import time, pyautogui, keyboard
time.sleep(4)

run = True
start = True
pyautogui.PAUSE = 0.01

def AutoClicker():
    while run == True:
        time.sleep(0)
        pyautogui.click()
        if keyboard.is_pressed("v"):
            break

while start == True:
    if keyboard.is_pressed('z'):
        AutoClicker()
