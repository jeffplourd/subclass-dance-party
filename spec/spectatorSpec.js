describe("puffDancer", function() {

  var puffDancer;
  var timeBetweenStep = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    puffDancer = new makePuffDancer(100,100, timeBetweenStep);
  });

  it("should have a jQuery  $node object", function() {
    expect(puffDancer.$node).to.be.an.instanceof(jQuery);
  });
});