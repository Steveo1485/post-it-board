Board = {
  initialize: function() {
    $('.icon-plus-circled').click(function() {
      PostIt.initialize();
    });
  }
};

PostIt = {
  initialize: function() {
    PostIt.addNewPost();
    PostIt.dragPost();
    PostIt.bindEvents();
  },

  bindEvents: function(){
    $('.post-it h4').dblclick(function(){
      PostIt.editNote();
    }),
    $('.post-it p').dblclick(function(){
      PostIt.editNote();
    }),
    $('.post-it h4').blur(function(){
      PostIt.stopEdit();
    }),
    $('.post-it p').blur(function(){
      PostIt.stopEdit();
    })
  },

  dragPost: function(){
    $(".post-it").draggable();
  },

  addNewPost: function(){
    var newPostItem = "<div class='post-it'><div class='content'><h4>Click to edit</h4><p>Me too</p></div></div>";
    $('#board').append(newPostItem);
  },

  editNote: function(){
    $('.post-it h4').attr("contenteditable",true);
    $('.post-it p').attr("contenteditable",true);
    $('.post-it').draggable({disabled:true});
  },

  stopEdit: function(){
    $('.post-it').draggable({disabled:false});
  }
};

$(document).ready(function() {
  Board.initialize()
 });
