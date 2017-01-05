// data.js - Defines an array of data regarding song files and their accompanying details.

var songDataGET = function() {
  return $.ajax({
    url: 'https://api.parse.com/1/classes/songs/',
    type: 'GET',
    // data: ,
    success: function(data) {
      // set up model objects
      console.log(data);
      var library = new Songs(data.results);
      var app = new AppModel({library: library});

      // build a view for the top level of the whole app
      var appView = new AppView({model: app});

      // put the view onto the screen
      $('body').append(appView.render());
    }
  });
};

songDataGET();
