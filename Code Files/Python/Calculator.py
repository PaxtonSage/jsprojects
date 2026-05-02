import time
from tkinter import *

#Setting up root
root = Tk()
root.title("Shitty Calculator")

e = Entry(root, width=35, borderwidth=5)
e.grid(row=0, column=0, columnspan=3, padx=10, pady=10)

#Functions
def button_add():
    return
#ButtonHellMadness
b0 = Button(root, text="0", padx=40, pady=20, command=button_add)
b1 = Button(root, text="1", padx=40, pady=20, command=button_add)
b2 = Button(root, text="2", padx=40, pady=20, command=button_add)
b3 = Button(root, text="3", padx=40, pady=20, command=button_add)
b4 = Button(root, text="4", padx=40, pady=20, command=button_add)
b5 = Button(root, text="5", padx=40, pady=20, command=button_add)
b6 = Button(root, text="6", padx=40, pady=20, command=button_add)
b7 = Button(root, text="7", padx=40, pady=20, command=button_add)
b8 = Button(root, text="8", padx=40, pady=20, command=button_add)
b9 = Button(root, text="9", padx=40, pady=20, command=button_add)

#ButttonHellSetup
b0.grid(row=4, column=0)

b1.grid(row=3, column=0)
b2.grid(row=3, column=1)
b3.grid(row=3, column=2)
b4.grid(row=2, column=0)
b5.grid(row=2, column=1)
b6.grid(row=2, column=2)
b7.grid(row=1, column=0)
b8.grid(row=1, column=1)
b9.grid(row=1, column=2)

#looping root
root.mainloop()
