var makeSpectatorShake = function(top, left, timeBetweenSteps){
  makeSpectator.call(this, top, left, timeBetweenSteps);
  var img = $('<img class="ourImage">');
  img.attr('src', 'http://fillmurray.com/100/100');
  this.$node.append(img);

  this.$node.addClass('spectatorshake');


};

makeSpectatorShake.prototype = Object.create(makeSpectator.prototype);
makeSpectatorShake.prototype.constructor = makeSpectatorShake;
makeSpectatorShake.prototype.step = function() {

  makeSpectator.prototype.step.apply(this);
  //make the spectators jump up and down
  if(!this.$node.hasClass('moving')){
    this.$node.children().animate({left:'+=30px'});
    this.$node.children().animate({left:'-=30px'});
  }  
};



