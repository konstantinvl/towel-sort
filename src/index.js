
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix===undefined){
    return [];
  } else if (matrix.length==0){
    return [];
  }else {return matrix.reduce((a,b,c)=>{return !(c%2)?c==0?b:a+','+b:a+','+b.reverse()},)
  .split(',');}
}
