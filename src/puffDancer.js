var makePuffDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('puffDancer');
  var image = $('img');
  image.src = 'http';
  this.$node.append(image);
};

makePuffDancer.prototype = Object.create(makeDancer.prototype);
makePuffDancer.prototype.constructor = makePuffDancer;
makePuffDancer.prototype.step = function() {
  makeDancer.prototype.step.apply(this,arguments);
  if(this.$node.css('borderWidth') === '200px') {
    this.$node.animate({
      borderWidth: '30px',
      borderRadius: '30px'
    }, 300);
  } else {
    this.$node.animate({
      borderWidth: '200px',
      borderRadius: '200px'
    }, 300);
  }
  
};