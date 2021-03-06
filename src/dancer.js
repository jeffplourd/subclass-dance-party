// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){  
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.score = 0;

  // makeDancer.prototype.step();
  // this one sets the position to some random default point within the body
  this.setPosition(top,left);
  this.step();
};

makeDancer.prototype.step = function(){
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.addAnimateClass = function(element, className, time){
  // addAnimateClass (bear, 'animLeft',$img)
  time = time || 1100;

  element.addClass(className)
  setTimeout(function(){
    element.removeClass(className);
  }, time);
  this.score++;
  $('.bearscore').text(bear.score);
  $('.prezscore').text(prez.score);  
};