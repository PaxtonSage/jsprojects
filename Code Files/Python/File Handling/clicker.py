import time, pyautogui, keyboard, threading
from tkinter import *

window = Tk()

window.title("Auto Clicker")

#Functions

#if keyboard.is_pressed('e'):
        #run = True

def clickedstart():
        time.sleep(2)

        run = True
        intervalInt = None
        pyautogui.PAUSE = 0.00001

        try:
            intervalInt = int(txt.get())
        except:
            pass

        start = time.time()

        while run == True:

            if keyboard.is_pressed('q'):
                run = False

            pyautogui.click()

            if intervalInt != None:
                if time.time() >= (start + intervalInt):
                    pyautogui.click()

            else:
                pyautogui.click()


label = Label(window, text=("Click Delay"))
label.grid(column=1, row=0, padx=(75,10))

txt = Entry(window,width=10)
txt.grid(column=1, row=1, padx=(75,10))

btn = Button(window, text="Start", command=clickedstart, bg="green", fg="lightgreen")
btn.grid(column=1, row=2, padx=(75,10))

window.geometry("275x250")

#icon = PhotoImage(file = appIcon.png)
#window.iconphoto(false, icon)

window.mainloop()
