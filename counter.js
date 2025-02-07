function counter(array){
    const counts = {};
    array.forEach(item => {
        counts[item] = (counts[item] || 0) + 1;
      });
      return counts;    
}
const inputArray = ['a', 'b', 'a', 'c', 'b', 'a'];
console.log(counter(inputArray))