// Your code here

mapToNegativize = sourceArray => {
    const resultArray = []
    sourceArray.forEach(element => {
         resultArray.push(element * -1)
    });
    return resultArray
}

function mapToNoChange(sourceArray){
    let resultArray = []
    sourceArray.forEach(element => {
        resultArray.push(element)
    })
    return resultArray
}

function mapToDouble(sourceArray){
    let resultArray = []
    sourceArray.forEach(element => {
        resultArray.push(element * 2)
    })
    return resultArray
}

function mapToSquare(sourceArray){
    let resultArray = []
    sourceArray.forEach(element => {
        resultArray.push(element * element)
    })
    return resultArray
}

function reduceToTotal(sourceArray, initial=0){
    let total = initial
    sourceArray.forEach(element => {
       total += element
    })
    return total
} 

function reduceToAllTrue(sourceArray){
    let result = true
    sourceArray.forEach(element => {
       if (element === false) result = false
    })
    return result
}

function reduceToAnyTrue(sourceArray){
    let result = false
    sourceArray.forEach(element => {
       if (element === true) result = true
    })
    return result
}