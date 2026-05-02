import keyboard, time



x = 8
y = 4
z = 2

list = [x, y, z]
print(list)
x = 6
print(list)

def a():
    print(x)
    print(list)

while True:
        if keyboard.is_pressed("g"):
            x=5
            list = [x, y, z]
            time.sleep(0.2)
            a()
            break
print(list)
