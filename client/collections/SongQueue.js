// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
  },

  playFirst: function() {
    this.models[0].play();
  },

  playEmpty: function() {
    // var emptySong = new SongModel();
    // console.log('emptySong in SongQueue', emptySong);
    // emptySong.play();
    // $('audio').attr('src', '');
  }
});