function findLongestWord(str) {
    arr = str.split(' ');
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
      if (max < arr[i].length)
        max = arr[i].length;
    }
    return max;
  }
  
  //findLongestWord("The quick brown fox jumped over the lazy dog")
  const result=findLongestWord("The quick brown fox jumped over the lazy dog");
  console.log(result);