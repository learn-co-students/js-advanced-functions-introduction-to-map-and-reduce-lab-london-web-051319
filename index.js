// Your code here

// ### `map`-like

// - `mapToNegativize(sourceArray)`

mapToNegativize = (sourceArray) => {
  const resultArray = []
  for (let number of sourceArray) {
    resultArray.push(-1 * number)
  }
  return resultArray
}

// - `mapToNoChange(sourceArray)`

function mapToNoChange(sourceArray) {
  let resultArray = []
  for (let number of sourceArray) {
    resultArray.push(number)
  }
  return resultArray
}

// - `mapToDouble(sourceArray)`

function mapToDouble(sourceArray) {
  let resultArray = []
  for (let number of sourceArray) {
    resultArray.push(number * 2)
  }
  return resultArray
}

// - `mapToSquare(sourceArray)`

function mapToSquare(sourceArray) {
  let resultArray = []
  for (let number of sourceArray) {
    resultArray.push(number**2)
  }
  return resultArray
}

// Remember, all `map` methods return a new `Array`.

// ### `reduce`-like

// - `reduceToTotal(sourceArray, startingPoint)`

function reduceToTotal(sourceArray, startingPoint = 0) {
  let total = startingPoint
  for (let number of sourceArray) {
    total += number
  }
  return total
}

// - `reduceToAllTrue(sourceArray)`

function reduceToAllTrue(sourceArray) {
  let result = true
  for (let element of sourceArray) {
    if (element === false) {
      result = false
    }
  }
  return result
}
// - `reduceToAnyTrue(sourceArray)`

function reduceToAnyTrue(sourceArray) {
  let result = false
  for (let element of sourceArray) {
    if (element === true) {
      result = true
    }
  }
  return result
}

// Remember, all `reduce` methods return a _value_.
