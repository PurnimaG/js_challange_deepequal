const deepEqual = (a, b) => {

  // If both inputs are undefined
  if (a === b) {
    return true;
  }

  if (a === null || b === null) {
    return false;
  }
  
  // Remove keys with undefind 
  const cleanData = (obj) => {
    Object.keys(obj).forEach((key) => {
      if (obj[key] === undefined) {
          delete obj[key];
        }
    });
    return obj;
  }
  
  const obj1 = cleanData(a);
  const obj2 = cleanData(b);

  if (typeof obj1 === 'object' && typeof obj2 === 'object') {

    // Check each key and its corresponding value
    for (const key of Object.keys(obj1)) {
      if (!Object.keys(obj2).includes(key)) {
        return false;
      }
      //Call function again for nested objects
      if (!deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }

    return true;
  }

  return false;
}

module.exports = deepEqual;