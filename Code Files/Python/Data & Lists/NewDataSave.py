import time, keyboard, os

x = 2
y = 4
z = 6

xyz = [x, y, z]

def Load():
    if os.path.exists("Data.txt"):

        File = open("Data.txt", "r")
        Details = File.read()
        File.close()

        xyz = Details
        print(Details)
        print(xyz)
    else:
        File = open("Data.txt", "w")
        File.write(str(xyz))
        File.close()
        Load()

Load()
