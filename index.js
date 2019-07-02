// Your code here

function mapToNegativize(array) {
   return array.map(element => element = -element)
};

function mapToNoChange(array) {
   return array.map(element => element);
};

function mapToDouble(array) {
   return array.map(element => element*2);
};

function mapToSquare(array) {
   return array.map(element => element**2);
};

function reduceToTotal(array, start = 0) {
   for(let i = 0; i < array.length; i++) {
      start += array[i];
   }
   return start;
};

function reduceToAllTrue(array) {
   for(let i = 0; i < array.length; i++) {
      if (array[i] === false) {
         return false;
      }
   } 
   return true;
};

function reduceToAnyTrue(array) {
   for(let i = 0; i < array.length; i++) {
      if (array[i] === true) {
         return true;
      }
   } 
   return false;
};