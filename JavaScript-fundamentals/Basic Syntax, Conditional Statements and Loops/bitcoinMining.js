function demo(input) {
  let bitcoins = 0;
  let totalGold = 0;
  let moneyGathered = 0;
  let days = 0;
  let moneyTotal = 0;
  let firstDay = 0;;
  let checkFirstDay = false;
  let checker = 0;
  for (let index = 0; index < input.length; index++) {
    days++;
    

    let gold = Number(input[index]);
    let moneyGold = gold * 67.51;
    if (days %3===0){
        moneyGold = (gold*67.51)*0.7;
    }
    moneyGathered +=moneyGold;
    while(moneyGathered >= 11949.16){
        checkFirstDay = true;
        moneyGathered -=11949.16;
        bitcoins++;
        if(bitcoins ===1){
            firstDay = days;
            
        }

    }
   
 
}
console.log(`Bought bitcoins: ${bitcoins}`);
if(bitcoins>0){
console.log(`Day of the first purchased bitcoin: ${firstDay}`);}
console.log(`Monet left: ${moneyGathered.toFixed(2)} lv.`);
}
demo([3124.15, 504.212, 2511.124])
