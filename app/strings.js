exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

    //var charInstances = {};
    var newStr = "";

    var curChar = '';
    var count = 0;

    for (var i = 0; i < str.length; i++) {

      var strChar = str.charAt(i);

      if(curChar !== strChar) {
        count = 0;
        curChar = strChar;
      }

      if(count < amount) {
        count++;
        newStr += strChar;
      }
    }
    return newStr;
  },
  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {
    if(str == null) return str;
    var res = "";
    for (var i = str.length - 1; i >= 0; i--) {
      res += str.charAt(i);
    }
    return res;
  }
};
