import time
from tkinter import *

#Variables
CW = 200
CL = 200

#Setting the window up
root = Tk()
root.title("Window Biach")
root.geometry("500x500")

#Functions
def Clicked():
    Button0 = Button(root, state=DISABLED).pack()

#Widgets
Button0 = Button(root, text="Don't Click Me", command=Clicked).pack()

#Looping the window
root.mainloop()

print("Program Ended")
