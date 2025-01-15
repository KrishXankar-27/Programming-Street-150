#include <stdio.h>
int main(){
    int num;
    printf("please enter a number:- ");
    scanf("%d" , &num);
if (num%2 == 0)
    {
        printf("%d its a even number \n" , num);

    }
else
{
        printf("%d its a odd number\n" , num);
}

    
    
    return 0;
}