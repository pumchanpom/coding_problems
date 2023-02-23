for i in range(10):
    for j in range(10):
        for k in range(10):
            if (i != j) and (i != k) and (j != k) and (3*(i*100 + j*10 + k) == j*111): 
                print("Hundreds Position:           ", i)
                print("Tens Position:               ", j)
                print("Ones Position:               ", k)
                print("Product of Three Positions: ", i*j*k)