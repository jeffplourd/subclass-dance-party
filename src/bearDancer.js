var makeBearDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.combo = [];
  //create and attach image
  this.$img = $('img');
  this.$img.src = 'http://placehold.it/100x300';
  // $img.src = 'images/bearDancer.gif';
  // this.$node.prepend($img);

};

makeBearDancer.prototype = Object.create(makeDancer.prototype);
makeBearDancer.prototype.constructor = makeBearDancer;
makeBearDancer.prototype.step = function() {

  makeDancer.prototype.step.apply(this);
  // this.$node.toggle();
};



