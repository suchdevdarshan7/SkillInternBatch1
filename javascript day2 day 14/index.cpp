#include<bits/stdc++.h>
using namespace std;
// Object oriented programming 
class math{
    public: 
    void sum(int a, int b ){
        cout<<a+b;
    }
};    
class score{
    public :
    void scoreOfPlayer(int n){
        cout<< "The score is "<<n;
    }
};


int main() {
    int a = 10 ; 
    int b = 20 ; 
    math m1;
    score s1 ; 
    m1.sum(a,b);

    s1.scoreOfPlayer(10);
   return  0;
}