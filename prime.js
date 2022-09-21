function prime(num){
count=0;
for(var i=1;i<=num;i++){
  if(num%i==0){
    count++;
  }
}if(count==2){
  console.log(num,"Prime prime number");
}else{
  console.log("Not a prime Number");
}
}
prime(2);