var makeSpectator = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  var img = $('<img id="bear" class="ourImage">');
  img.attr('src', 'http://fillmurray.com/100/100');
  this.$node.append(img);

  this.$node.addClass('spectator');


};

makeSpectator.prototype = Object.create(makeDancer.prototype);
makeSpectator.prototype.constructor = makeSpectator;
makeSpectator.prototype.step = function() {

  makeDancer.prototype.step.apply(this);
  //make the spectators jump up and down
  var temp = Number(this.$node.css('top').slice(0,-2));
  temp = temp + 10;
  this.$node.animate({top: temp + 'px'});
  temp = temp - 10;
  this.$node.animate({top: temp + 'px'});
};



