
function possible(a, b){
    
    for (let i = 1; i <= 6; i++) {
      a += 1;
      if (a === b) {
        return true;
      } 
    }
    return false;
  };
  
  console.log(possible(3, 10));
  console.log(possible(3,6));
  console.log(possible(3, 8));
  
  console.log(possible(3, 9));
 
  
  console.log(possible(1, 9));
  console.log(possible(5, 3));
  console.log(possible(5, 5)); 