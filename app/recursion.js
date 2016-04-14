exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

    if(data == null) return; // Not liking this... using "==" is annoying

    if(dirName) { // if we want to list a sub-directory
      var file = data.files.find(function (file) { return file.dir === dirName});
      if(file) { // if file found
        data = file;
      }
    }

    function listFiles_Rec(data, list) { // I always liked this type of tail call recursion

      if(data.files == null) return; // If this is not a directory - return

      data.files.forEach(function (file) {
        var fileType = typeof file;
        switch(fileType) {
          case "string":
            list.push(file);
            break;
          case "object":
            listFiles_Rec(file, list);
            break;
          default:
            //do nothing
        }
      })
    }

    var res = [];
    listFiles_Rec(data, res);
    return res;
  },

  permute: function(arr) {

    /*res = [];

    function perm_rec(arr, cur, res) {

      for(var i = 0; i < arr.length; i++) {
        //cur.slice()
      }
    }*/
  },

  fibonacci: function(n) {
    // definitely not efficient - should be tail recursive, most likely with some array for caching results
    function fib_rec(n) {
      if(n === 0) return 0;
      if(n === 1) return 1;
      return fib_rec(n-1) + fib_rec(n-2)
    }

    return fib_rec(n);
  },

  validParentheses: function(n) {

  }

};
