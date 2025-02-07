const array = ["mohammad", "Sara", "laptop"];
function transformArray(array) {
    return array.map(item => ({
      value: item , length: item.length
    }));
  }
 
  const transformedArray = transformArray(array);
  console.log(transformedArray);
