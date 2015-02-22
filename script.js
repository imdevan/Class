
// function called when document is loaded
$(function() {
  var current = undefined;

  function toggleClassInfo(elm){
      if(elm == current)
      {
        $(elm).removeClass('showing');
        current = undefined;
      }
      else
      {
        $('.showing').removeClass('showing');
        current = elm;
        $(elm).addClass('showing');
      }
  };

  $('.class-section').on('click', function(){
    toggleClassInfo(this);
  });

  // $('.schedule-button').on('click', function(){
  //   toggleSchedule();
  // });
});
