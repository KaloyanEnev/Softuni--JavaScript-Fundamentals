function demo(input){
    let username  = input[0];
    let password = "";
    let wrongPassCount = 0;
    let i = 1
    let passGuess = input[i];
    for (let index = username.length-1; index >=0 ; index--) {
        password += username[index];
        
    }
    while (passGuess !== password){
        
        wrongPassCount++;
        if(wrongPassCount >3){
            console.log(`Acc ${username} blocked`);
            break;
        }
        console.log(`Wrong password try again`);
        i++;
        passGuess = input[i]
     
    }
    if(passGuess === password){
        console.log(`Welcome ${username }`);
    }
    
    

}
demo(['sunny','rainy','cloudy','sunny','not sunny'])