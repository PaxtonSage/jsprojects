List = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for i in List:
    if len(List) < 30:
        if i != i-1:
            List.insert(i+1, i)
            print(List)
