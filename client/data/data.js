// data.js - Defines an array of data regarding song files and their accompanying details.
var rickRoll = {
  url: 'http://cd09.128.mp3.jango.com/music/02/37/06/0237067387.mp3',
  title: 'Never Gonna Give You Up',
  artist: 'Rick Astley'
};

var songDataGET = function() {
  return $.ajax({
    url: 'https://api.parse.com/1/classes/songs/',
    type: 'GET',
    // data: ,
    success: function(data) {
      // set up model objects
      var library = new Songs(data.results);
      library.add(rickRoll);
      var app = new AppModel({library: library});

      // build a view for the top level of the whole app
      var appView = new AppView({model: app});

      // put the view onto the screen
      $('body').append(appView.render());
    }
  });
};

songDataGET();



// var rickRoller = function() {
//   $.ajax({
//     url: 'https://api.parse.com/1/classes/songs/',
//     type: 'POST',
//     data: JSON.stringify(rickRoll),
//     success: function() {
//       console.log('rolled');
//     }
//   });
// };