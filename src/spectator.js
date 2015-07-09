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
  this.$node.animate({top:'+=30px'});
  this.$node.animate({top:'-=30px'});
};



