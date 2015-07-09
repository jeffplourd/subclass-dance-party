describe("bearDancer", function() {

  var bearDancer;
  var timeBetweenStep = 100;
  var clock;
  
  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bearDancer = new makebearDancer(100,100, timeBetweenStep);
  });
  // 
  it("should have a jQuery  $node object", function() {
    expect(bearDancer.$node).to.be.an.instanceof(jQuery);
  });
});