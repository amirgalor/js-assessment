exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
  globals : function() {
    var myObject = {
      name : 'Jory'
    };

    return myObject;
  },

  functions : function(flag) {

    // If I remember correctly this will behave differently under different browser - basically depends on implementation of the JS engine nad hoisting.
    /*
    if (flag) {
      function getValue() { return 'a'; }
    } else {
      function getValue() { return 'b'; }
    }*/

    //function getValue(flag) { return flag ? 'a':'b'}

    var getValue = flag ?
        function getValue1() { return 'a'; } : function getValue2() { return 'b'; };

    return getValue();
  },

  parseInt : function(num) {
    return Number.parseInt(num, 10);
  },

  identity : function(val1, val2) {
    return val1 === val2;
  }
};
