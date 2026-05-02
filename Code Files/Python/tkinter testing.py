import keyboard, time
from tkinter import *

#root Settings
root = Tk()
root.title("root")
root.geometry("400x400")

#Widgets
#Grid.rowconfigure(root, 0, weight=1)
Grid.columnconfigure(root, 0, weight=1)
#Grid.rowconfigure(root, 1, weight=1)

b1 = Button(root, text="Button 1")
b2 = Button(root, text="Button 2")

b1.grid(row=0, column=0, sticky="nsew")
b2.grid(row=1, column=0, sticky="nsew")
#Looping The root
root.mainloop()
