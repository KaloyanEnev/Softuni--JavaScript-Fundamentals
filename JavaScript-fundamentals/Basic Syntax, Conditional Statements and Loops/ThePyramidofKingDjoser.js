function demo(base, increment) {
  let floor = 0;
  let stone = 0;
  let marble = 0;
  let lapiz = 0;
  let gold = 0
  let height = 0;
  while(base > 1){
    let TotalBlocks = base*base*increment;
    let innerBlocks = (base-2)*(base-2)*increment;
    let outerBlocks = TotalBlocks-innerBlocks;
    floor ++;
    if(base-2===0){
        break;
    }
    base -=2;
    if(floor % 5 ===0){
        lapiz +=outerBlocks;
        stone += innerBlocks
    }
    else{
        stone += innerBlocks
        marble += outerBlocks
    }

  }
  floor ++;
  height = Math.floor(floor*increment);
  gold = Math.ceil(base*base*increment);
  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapiz)}`);
  console.log(`Gold required: ${gold}`);
  console.log(`Final pyramid height: ${height}`);
  
}
demo(12, 1)
