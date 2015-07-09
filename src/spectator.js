var makeSpectator = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);

};

makeSpectator.prototype = Object.create(makeDancer.prototype);
makeSpectator.prototype.constructor = makeSpectator;
makeSpectator.prototype.step = function() {

  makeDancer.prototype.step.apply(this);
  this.$node.toggle();
};



