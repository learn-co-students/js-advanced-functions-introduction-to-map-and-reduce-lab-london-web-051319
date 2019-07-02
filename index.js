function mapToNegativize(arr) {
  let new_arr = [];

  arr.forEach(n => {
    if (n > 0) {
      let nn = n - (n + n);
      new_arr.push(nn);
    } else if (n < 0) {
      let nn = n * -1;
      new_arr.push(nn)
    }
  });

  return new_arr;
}

function mapToNoChange(arr) {
  return arr;
}

function mapToDouble(arr) {
  let new_arr = [];

  arr.forEach(n => {
    new_arr.push(n*2);
  });

  return new_arr;
}

function mapToSquare(arr) {
  let new_arr = [];

  arr.forEach(n => {
    new_arr.push(n**2);
  });

  return new_arr;
}

function reduceToTotal(sourceArray, startingPoint) {
  if (!startingPoint) startingPoint = 0;

  sourceArray.forEach(n => {
    startingPoint += n;
  });

  return startingPoint;
}

function reduceToAllTrue(arr) {
  let trueCount = 0;

  for (let val of arr) {
    if (val) {
      trueCount++;
    } else {
      return false;
      break;
    }
  }

  if (trueCount === arr.length) return true;
}

function reduceToAnyTrue(arr) {
  let state;

  for (let val of arr) {

    if (val) {
      state = true;
    } else {
      state = false;
    }
  }

  return state;
}
