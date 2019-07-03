// Your code here

const mapToNegativize = (arr) => arr.map(e => -e);
const mapToNoChange = (arr) => arr.map(e => e);
const mapToDouble = (arr) => arr.map(e => e * 2);
const mapToSquare = (arr) => arr.map(e => e ** 2);

const reduceToTotal = (arr, start = 0) => arr.reduce((sum, e) => sum + e, start);
const reduceToAllTrue = arr => arr.reduce((check, e) => {
  e || (check = !1);
  return check;
}, true);

const reduceToAnyTrue = arr => arr.reduce((check, e) => {
  e && (check = !0);
  return check;
}, false);
