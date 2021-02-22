// Code your solutions in this file
function writeCards(names, event){
    let arr = [];
    for(let num = 0; num < names.length ; num++ ) {  
        arr.push(`Thank you, ${names[num]}, for the wonderful ${event} gift!`);
    }
    return arr;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}