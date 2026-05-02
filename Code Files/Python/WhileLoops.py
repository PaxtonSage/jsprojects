import time, keyboard, sys, os, pyautogui
from threading import Thread

#bro all this god damn work and this shit clicks like 2 cps wat da hell man
#Setting up the Program
n = 0, 0
m = 0, 0
a = False
pyautogui.PAUSE = 0.00

#Ending the Program
def end():
    while True:
        if keyboard.is_pressed("p"):
            os._exit(1)

#Setting Up the Autoclicker
def start():
    while True:
        global a
        global n
        global m

        if keyboard.is_pressed("n"):
            currentMouseX, currentMouseY = pyautogui.position()
            n = pyautogui.position()
            m = pyautogui.position()
            time.sleep(0.2)
            print(n)
            print(m)

        if keyboard.is_pressed("m"):
            currentMouseX, currentMouseY = pyautogui.position()
            m = pyautogui.position()
            time.sleep(0.2)
            print(m)

        if keyboard.is_pressed("b"):
            if n != (0, 0):
                a = True
                clicking()

#Clicking Process
def clicking():
    global a
    global n
    global m
    while a == True:
        if keyboard.is_pressed("v"):
            a = False
        pyautogui.click(n)
        pyautogui.click(m)
#Threading for multiple "while loops"
t1 = Thread(target = end)
t2 = Thread(target = start)
t3 = Thread(target = clicking)

t1.start()
t2.start()
t3.start()
