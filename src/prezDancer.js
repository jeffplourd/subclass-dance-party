var makePrezDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.combo = [];
  this.score = 0;

  //adds image to screen
  var prez = ['bill', 'coolidge', 'george'];
  var rand = Math.floor(Math.random() * prez.length);
  var img = $('<img class="ourImage">');
  img.attr('src', 'http://fillmurray.com/100/400');

  var head = $('<img class="headImage">');
  head.attr('src', 'images/' + prez[rand] + '.jpg');
  // head.attr('src', 'images/george.jpg');

  this.$img = img;

  $('.container').append(this.$node.append(this.$img).addClass('prez'));
  this.$node.append(head);
};

makePrezDancer.prototype = Object.create(makeDancer.prototype);
makePrezDancer.prototype.constructor = makePrezDancer;
makePrezDancer.prototype.step = function() {

  makeDancer.prototype.step.apply(this);
  // this.$node.toggle();
};



