var makePrezDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.combo = [];

  //adds image to screen
  var prez = ['bill', 'coolidge', 'george'];
  var rand = Math.floor(Math.random() * prez.length);
  var img = $('<img class="ourImage">');
  img.attr('src', 'images/shuffle-guy-transparent.gif');

  // var head = $('<div class="head"></div>');
  // var headImg = $('<img class="headImage">');
  // headImg.attr('src', 'images/' + prez[rand] + '.jpg');
  // head.append(headImg);


  // head.attr('src', 'images/george.jpg');

  this.$img = img;

  $('.container').append(this.$node.append(this.$img).addClass('prez'));
};

makePrezDancer.prototype = Object.create(makeDancer.prototype);
makePrezDancer.prototype.constructor = makePrezDancer;
makePrezDancer.prototype.step = function() {

  makeDancer.prototype.step.apply(this);
  // this.$node.toggle();
};



