function mapToNegativize(arr) {
  const newArr = []
  for (let each of arr) {
    newArr.push(-1 * each)
  }
  return newArr
}

function mapToNoChange(arr) {
  const newArr = []
  for (let each of arr) {
    newArr.push(each)
  }
  return newArr
}

function mapToDouble(arr) {
  const newArr = []
  for (let each of arr) {
    newArr.push(2 * each)
  }
  return newArr
}

function mapToSquare(arr) {
  const newArr = []
  for (let each of arr) {
    newArr.push(each*each)
  }
  return newArr
}

function reduceToTotal(arr, start = 0) {
  let total = start
  for (let each of arr) {
    total += each
  }
  return total
}

function reduceToAllTrue(arr) {
  // arr.every(x => x)
  for (let each of arr) {
    if (!each) {
      return false;
    }
  }
  return true;
}

function reduceToAnyTrue(arr) {
  // arr.every(x => x)
  for (let each of arr) {
    if (each) {
      return true;
    }
  }
  return false;
}
