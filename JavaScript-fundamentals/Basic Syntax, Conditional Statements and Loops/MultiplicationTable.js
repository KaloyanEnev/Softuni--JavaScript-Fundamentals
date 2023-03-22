function demo(number){
    for (let index = 1; index <= 10; index++) {
        let multi = index*number;
        console.log(`${number} X ${index} = ${multi}`);
        
    }
}
demo(5)