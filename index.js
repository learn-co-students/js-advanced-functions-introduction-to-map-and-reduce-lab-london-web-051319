// Your code here
const mapToNegativize = function(array){
    return array.map(element => element * -1)
}

const mapToNoChange = function(array){
    return array.map(element => element)
}

const mapToDouble = function(array){
    return array.map(element => element * 2)
}

const mapToSquare = function(array){
    return array.map(element => element ** 2)
}


const reduceToTotal = function(sourceArray, start=0){
    return sourceArray.reduce( (total, current) => total+current, start)
}

const reduceToAllTrue = function(sourceArray){
    let i = sourceArray.length;
    while(i > 0)
    {
        if(sourceArray[i] === false)
        return false;
        i--
    }
    return true
}

const reduceToAnyTrue = function(sourceArray){
    let i = sourceArray.length;
    while(i > 0){
        if(sourceArray[i] === true){
        return true}
        else if(sourceArray[i] === false || sourceArray[i] === null){
        return false}
        i--;

    }
}