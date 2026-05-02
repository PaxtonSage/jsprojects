import time


n = 1
list = [n]

while True:
    list.insert(n+1, n+1)
    n += 1
    time.sleep(0.1)
    print(list)
