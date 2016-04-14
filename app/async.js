exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise(function(resolve) { // we don't need the reject
      resolve(value);
    });
  },

  manipulateRemoteData : function(url) {
    return new Promise(function(resolve) { // we don't need the reject

      $.get(url, function(data, status){
        var arr = [];
        for (var i = 0; i < data.people.length; i++) {
          arr.push(data.people[i].name);
        }
        resolve(arr.sort());
      });

    });
  }
};
