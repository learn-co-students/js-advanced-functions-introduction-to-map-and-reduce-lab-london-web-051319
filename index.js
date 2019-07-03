function mapToNegativize(array){
    const mappedArray = []
    for (let i = 0; i < array.length; i++){
        mappedArray.push(array[i] * -1)
    }
    return mappedArray
}

function mapToNoChange(array){
    const mappedArray = []
    for (let i = 0; i < array.length; i++){
        mappedArray.push(array[i])
    }
    return mappedArray
}

function mapToDouble(array){
    const mappedArray = []
    for (let i = 0; i < array.length; i++){
        mappedArray.push(array[i] * 2)
    }
    return mappedArray
}

function mapToSquare(array){
    const mappedArray = []
    for (let i = 0; i < array.length; i++){
        mappedArray.push(array[i] ** 2)
    }
    return mappedArray
}

function reduceToTotal(array, startingPoint){
    if (!startingPoint){
        startingPoint = 0
    }
    for (let i = 0; i < array.length; i++){
        startingPoint += array[i]
    }
    return startingPoint
}

function reduceToAllTrue(array){
    let trueCheck = true
    for (let i = 0; i < array.length; i++){
        if (!array[i]){
            trueCheck = false
        }
    }
    return trueCheck
}

function reduceToAnyTrue(array){
    let trueCheck = false
    for (let i = 0; i < array.length; i++){
        if (array[i]){
            trueCheck = true
        }
    }
    return trueCheck
}