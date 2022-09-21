function prime(num){
counter=0;
for(var i=1;i<=num;i++){
  if(num%i!=0){
    counter++;
  }
}if(counter==2){
  console.log(num," is Prime Number");
}else{
  console.log(num,"is not a Prime Number");
}
}
prime(2);