$(document).ready(function(){
  window.dancers = [];
  window.bear = new makeBearDancer(300, 550, 500);
  window.prez = new makePrezDancer(300, 950, 500);
  window.people = ['Jeff','Adnan','Bob','Bill'];
  window.phrases = ['The bear is looking weak...',"Get 'em, Mr. President!","Where's the bathroom?"];

  // $('.bear').hide();
  // $('.prez').hide();

  //create
  var dialog = $('<div class="dialog">this is a dialog box, yeahhhhhhh!!!!</div>')
  $('.container').append(dialog.hide());


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
      $(".container").height() * Math.random(),
      $(".container").width() * Math.random(),
      Math.max(400, Math.random() * 1000)
    );

    for (var i = 0; i < dancers.length; i++) {
      var oldDancer = dancers[i];
      var x1 = parseInt(oldDancer.$node.css('top'));
      var y1 = parseInt(oldDancer.$node.css('left'));
      var x2 = parseInt(dancer.$node.css('top'));
      var y2 = parseInt(dancer.$node.css('left'));
      var distance = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
      debugger;
      if(distance < 400){
        oldDancer.$node.animate({
          top:'+=200px',
          left:'+=200px'
        })
      }

    }

    $('.container').append(dancer.$node);
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
  Bear

    keys:
      a: 97
      s: 115
      d: 100
      f: 102

    //bear
    //1. a a -> rotate left
    //2. f f -> rotate right
    //3. d d -> flip right
    //4. s s -> flip left
    //
  */
  var addAnimateClass = function(element, className, time){
    // addAnimateClass (bear, 'animLeft',$img)
    time = time || 1100;

    element.addClass(className)
    setTimeout(function(){
      element.removeClass(className);
    }, time);
  }

  $(document).on('keypress', function(event) {
    if(!bear.$node.hasClass('animLeft') && !bear.$node.hasClass('anim')) {
      //if keypress is equal to a -> 97 or -> 102    
      if(event.which === 97 || event.which === 102) {
        //bear.bearcombo.push(event)
        bear.combo.push(event.which);
        if(bear.combo.length === 2) {
          //do action
          if(bear.combo[0] === 97 && bear.combo[1] === 97) {
            //action for rotate left
            addAnimateClass(bear.$node, 'animLeft');         
          }else if(bear.combo[0] === 102 && bear.combo[1] === 102) {
            //action for rotate left
            addAnimateClass(bear.$node, 'anim');         
          }
          //clear the array
          bear.combo = [];
        }


      }else if(event.which === 115 || event.which === 100) {
        bear.combo.push(event.which);
        if(bear.combo.length === 2) {
          //do action
          if(bear.combo[0] === 100 && bear.combo[1] === 100) {
            //action for rotate left
            addAnimateClass(bear.$node, 'flipRight');         
          }else if(bear.combo[0] === 115 && bear.combo[1] === 115) {
            //action for rotate left
            addAnimateClass(bear.$node, 'flipLeft');         
          }
          //clear the array
          bear.combo = [];
        }        
      }
    }

  });

  $(document).on('keydown', function(event) {
    //Prez logic
    //left left, 97 -> 37
    //up up      115 -> 38
    //down down 100 -> 40
    //right right 102 -> 39
    if(!prez.$node.hasClass('animLeft') && !prez.$node.hasClass('anim')) {
      //if keypress is equal to a -> 97 or -> 102 
      if(event.which === 37 || event.which === 39) {
        //prez.prezcombo.push(event)
        prez.combo.push(event.which);
        if(prez.combo.length === 2) {
          //do action
          if(prez.combo[0] === 37 && prez.combo[1] === 37) {
            //action for rotate left
            addAnimateClass(prez.$node, 'animLeft');         
          } else if(prez.combo[0] === 39 && prez.combo[1] === 39) {
            //action for rotate left
            addAnimateClass(prez.$node, 'anim');         
          }
          //clear the array
          prez.combo = [];
        }
      } else if(event.which === 38 || event.which === 40) {
        prez.combo.push(event.which);
        if(prez.combo.length === 2) {
          //do action
          if(prez.combo[0] === 40 && prez.combo[1] === 40) {
            //action for rotate left
            addAnimateClass(prez.$node, 'flipRight');         
          } else if(prez.combo[0] === 38 && prez.combo[1] === 38) {
            //action for rotate left
            addAnimateClass(prez.$node, 'flipLeft');         
          }
          //clear the array
          prez.combo = [];
        }        
      }
    }
  });
  $(document.body).on('mouseover', '.spectator', function(event) {
    var person = people[Math.floor(Math.random() * people.length)];
    var phrase = phrases[Math.floor(Math.random() * phrases.length)];

    $('.dialog').text(person+': '+phrase);
    $('.dialog').show();
    /* Act on the event */
  });

  $(document.body).on('mouseout', '.spectator', function(event) {
    $('.dialog').hide();
    /* Act on the event */
  });

  //make event handler for 'mouseover' on spectator element
  
});

