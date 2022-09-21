function prime(num){
count=0;
for(var i=1;i<=num;i++){
  if(num%i==0){
    count++;
  }
}if(count==2){
  console.log(num,"is a Prime Number");
}else{
  console.log(num,"is not a Prime Number");

}
}
prime(4);