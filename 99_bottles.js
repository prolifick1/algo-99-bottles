function bottleSong(n) {
  // Write your code here!
  for(n; n >= 0; n--) {
    if(n === 0) {
      console.log(`No more bottles of beer on the wall \
no more bottles of beer. \nGo to the store and buy \
some more, 99 bottles of beer on the wall. \n` );
    }
    else if(n === 1) {
      console.log(`${n} bottle of beer on the wall, \
${n} bottle of beer. \nTake one down, pass it \
around, no more bottles of beer on the wall. \n`);
    } else {
      
        console.log(`${n} bottles of beer on the wall, \
${n} bottles of beer. \nTake one down, pass it \
around, ${n-1} bottles of beer on the wall. \n`);
    }
  }
};

bottleSong(99);
