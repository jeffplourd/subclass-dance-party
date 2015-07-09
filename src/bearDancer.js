var makeBearDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.combo = [];
  this.score = 0;
  
  //adds image to screen
  var img = $('<img id="bear" class="ourImage">');
  img.attr('src', 'http://fillmurray.com/100/400');
  this.$img = img;

  $('.container').append(this.$node.append(this.$img).addClass('bear'));

};

makeBearDancer.prototype = Object.create(makeDancer.prototype);
makeBearDancer.prototype.constructor = makeBearDancer;
makeBearDancer.prototype.step = function() {

  makeDancer.prototype.step.apply(this);
  // this.$node.toggle();
};



