#include <stdio.h>
int main(){
    int num , isPrime = 1;
    printf("please enter a number:- ");
    scanf("%d" , &num);
    if(num<0){
        return 1;
    }
    for (int i = 2; i < num; i++)
    {
       if (num%i == 0)
       {
        isPrime = 0;
        break;
       }
       
    }
    if (isPrime)
    {
    printf("%d is a prime number" , num);
    }
    else
    {
    printf("%d is not prime number" , num);
    }
    
    
    return 0;
}