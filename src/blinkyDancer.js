var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.step = function() {
  //makeDancer.prototype.step.apply calls the parents version 'step' 
  makeDancer.prototype.step.apply(this);
  this.$node.toggle();
};

//the big question I have is how do I inherit methods from the dancer class, create a new method that
//overrides the previous 'step' function, but still calls the previous step function

//If you need to save the parent method before overriding it by a child method,
//how would you go about doing that?

