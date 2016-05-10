'use strict';

describe('Feature Test:',function(){
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });
  it('Plane can be instructed to land at an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('plane can take off and is no longer in the airport', function(){
    plane.land(airport);
    plane.takeOff();
    expect(airport.planes()).toEqual([]);
  });
});
