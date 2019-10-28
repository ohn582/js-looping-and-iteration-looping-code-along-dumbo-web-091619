function writeCards(name, event){
  let arr = [];
  for (let i = 0; i < name.length; i += 1){
    arr.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
  }
  return arr;
}


function countDown(num) {
  let i = num;
  while( 0 > num ){
    console.log(num);
    i -= 1
  }
  countDown(10);
}