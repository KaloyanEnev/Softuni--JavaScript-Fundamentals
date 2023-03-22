function demo(base, increment){
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let floor = 0;

    while (base>1){
        let innerBlocks = (base-2)*(base-2)*increment;
        let totalBlocks = base*base*increment;
        let outerBlocks = totalBlocks-innerBlocks;
        floor ++;
        if(base-2 ===0){
            break;
        }
        base -=2;
        
        if(floor % 5 ===0){
            lapis += outerBlocks
            stone += innerBlocks;
        }else{
            stone +=innerBlocks;
            marble +=outerBlocks
        }

    }
    floor++;
    let height = Math.floor(floor*increment)
    gold = Math.ceil(base*base*increment)
    console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
  console.log(`Gold required: ${gold}`);
  console.log(`Final pyramid height: ${height}`);
}
demo([11, 0.75])