// Your code here
function mapToNegativize(sourceArray) {
  let newArray = [];
  sourceArray.forEach(element => {
    let newElement = element * -1;
    newArray.push(newElement);
    
  });
  return newArray
}

function mapToNoChange(sourceArray) {
  let newArray = sourceArray;
  return newArray;
}

function mapToDouble(array) {
  let doubledArray = [];
  array.forEach(element => {
    doubledArray.push(element * 2);
  })
  return doubledArray;
}

function mapToSquare(array) {
  let squaredArray = [];
  array.forEach(element => {
    squaredArray.push(element * element);
  })
  return squaredArray;
}

function reduceToTotal(array, startingPoint = 0) {
  let total = startingPoint;
  array.forEach(element => {
    total += element
  })
  return total;
}

function reduceToAllTrue(array) {
  let truthy = true;
  for(let element of array){
    if(!!element == true) {
      truthy = true;
    }
    else {
      truthy = false
      break
    }
   }
   return truthy;
}

function reduceToAnyTrue(array) {
  if (array.includes(true)){
    return true
  }
  else {
    return false;
  }
}