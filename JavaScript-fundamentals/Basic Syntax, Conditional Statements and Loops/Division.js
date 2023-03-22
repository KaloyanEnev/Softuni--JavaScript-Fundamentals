function demo(number){
    if(number % 10 ===0){
        console.log(`The number is divisble by 10`);
    }else if (number % 7 ===0){
        console.log(`The number is divisble by 7`);
    }else if (number % 6 ===0){
        console.log(`The number is divisble by 6`);
    }else if (number % 3 ===0){
        console.log(`The number is divisble by 3`);
    }else if (number % 2 ===0){
        console.log(`The number is divisble by 2`);
    }else {
        console.log(`Not divisible`);
    }
}
demo(12)