var makePrezDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.combo = [];
};

makePrezDancer.prototype = Object.create(makeDancer.prototype);
makePrezDancer.prototype.constructor = makePrezDancer;
makePrezDancer.prototype.step = function() {

  makeDancer.prototype.step.apply(this);
  this.$node.toggle();
};



