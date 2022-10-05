const a = [1,3,4,2,7,9,10,6,8]
const b = [1,3,9,11,5,7,13]

function intersect(a, b) {
    return a.filter(Set.prototype.has, new Set(b));
  }
   
console.log(intersect(a, b));