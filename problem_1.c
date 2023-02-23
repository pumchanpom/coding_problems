#include <stdio.h>

int main(void) 
{
    int i, j, k;

    for (i = 0; i < 10 ; i++) {
        for (j = 0; j < 10 ; j++) {
            for (k = 0; k < 10 ; k++) {
                if (((i != j) && (i != k) && (j != k)) && (3*(i*100 + j*10 + k) == j*111)) {
                    printf("Hundreds Position:          %d\n", i);
                    printf("Tens Position:              %d\n", j);
                    printf("Ones Position:              %d\n", k);
                    printf("Product of Three Positions: %d\n", i*j*k);
                }
            }
        }
    }
}