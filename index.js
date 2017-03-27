function iterativeLog(array){
  array.forEach((element, index, array) => {
  	console.log(`${index}: ${element}`)
  });
}

function iterate(cb){
  array = [4,5,6,7];
  array.forEach(cb);
  return array;
  }

function doToArray(array, callback){
  array.forEach(callback);
}
