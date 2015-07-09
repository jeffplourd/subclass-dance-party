var makeBearDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.combo = [];
  
  //adds image to screen
  var img = $('<img id="bear" class="ourImage">');
  img.attr('src', 'http://fillmurray.com/100/300');
  this.$img = img;
  $('body').append(this.$img);



};

makeBearDancer.prototype = Object.create(makeDancer.prototype);
makeBearDancer.prototype.constructor = makeBearDancer;
makeBearDancer.prototype.step = function() {

  makeDancer.prototype.step.apply(this);
  // this.$node.toggle();
};



