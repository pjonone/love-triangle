/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var arr = [];
    for(var i=0; i < preferences.length; i++){
        var x = preferences[i];
        var y = preferences[x-1];
        var z = preferences[y-1];
        if (z == i+1)arr.push(preferences[z-1]);
    }
  return Math.floor(arr.length/3);
};
