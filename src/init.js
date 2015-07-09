$(document).ready(function(){
  window.dancers = [];
  window.bear = new makeBearDancer(1000, 500, 500);

  $('.bear').hide();

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.max(400, Math.random() * 1000)
    );
    $('body').append(dancer.$node);
    dancers.push(dancer);
  });

  $(".lineupButton").on("click", function(event) {
    var newTop = 20;
    for(var i = 0; i < dancers.length; i++) {
      dancers[i].$node.animate({top: newTop, left: 100})
      newTop += 50;
    }
  });

  //something to add start page html

  //event on the start page to listen for click and start game
    //hides start page


  /*
  MOVES

    keys:
      a: 65
      f: 70

    //bear
    //1. Popout
    //2. Rotation left
    //3. Rotate twice rigth
  */

  $(document).on('keypress', function(event) {
    //if keypress is equal to 65 or 70    
    if(event.which === 97 || event.which === 102) {
      //bear.bearcombo.push(event)
      bear.combo.push(event.which);
      if(bear.combo.length === 2) {
        //do action
        if(bear.combo[0] === 97 && bear.combo[1] === 97) {
          //action for rotate left
          bear.$img.addClass('animLeft');
          setTimeout(function() {
            bear.$img.removeClass('animLeft');
          }, 1100);          
        }else if(bear.combo[0] === 102 && bear.combo[1] === 102) {
          //action for rotate left
          bear.$img.addClass('anim');
          setTimeout(function() {
            bear.$img.removeClass('anim');
          }, 1100);
        }else if(bear.combo[0] === 102 && bear.combo[1] === 97) {
          bear.$img.animate({
            top: 600,
            left: 500
          });
        }
        //clear the array
        bear.combo = [];
      }
    }
      //bear.bearCombo.length === 3 -> do action, clear the array
        //if a, a then rotate left
        //if f, f then rotate right twice
        //if a, f then popout
        //if f, a then jump up and down
  });



});

