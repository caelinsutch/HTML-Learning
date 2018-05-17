var num = -15
while(num<=333){
  if (num>=10 && num<=19) {
    console.log(num);
  };
  if (num>= 10 && num<=40 && num%2 !== 0) {
    console.log(num);
  };
  if (num>=300 && num<=333 && num%3 === 1){
    console.log(num);
  };
  if (num>=5 && num<=50 && num%5 !== 0 && num%3 !== 0){
    console.log(num);
  };
  num ++
}
