describe("prezDancer", function() {

  var prezDancer;
  var timeBetweenStep = 100;
  var clock;

  var simulateKeyPress = function(character) {
    jQuery.event.trigger({type: 'keypress', which: character});
  };

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    prezDancer = new makePrezDancer(100,100, timeBetweenStep);
  });

  it("should have a jQuery  $node object", function() {
    expect(prezDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should rotate left when 'a' is pressed twice", function() {
    sinon.spy(prezDancer,'addAnimateClass');
    simulateKeyPress(40);
    simulateKeyPress(40);
    debugger
    expect(prezDancer.addAnimateClass.called).to.be.true;
  });
});