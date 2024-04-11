#include <bits/stdc++.h>
using namespace std;
int main(){
  int n,m,k;
  int count,temp,temp2;
  int arr[n][m];
  int arr2[m];
  cin>>n>>m>>k;
  for(int i=0;i<n;i++){
    for(int j=0;j<m;j++){
      cin>>arr[i][j];
    }
  }
  int arr2[m] = {0};
  int empl[n] = {0};
  int empl2[n] = {0};
  while(k--){
    cin>>emp>>chat;
    arr2[chat-1]++;
    empl[emp-1]++;
  }
  for(int i=0;i<n;i++){
    for(int j=0;j<m;j++){
      empl2[j]+= arr[i][j]*arr2[j]; 
    }
  }
  for(int i=0;i<n;i++){
    cout<<empl2[i]- empl[i]<<' ';
  }

}