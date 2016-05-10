'use strict';

describe('Feature Test:',function(){
  var plane;
  var plane1;
  var plane2;
  var plane3;

  var airport;

  beforeEach(function() {
    plane = new Plane();
    plane1 = new Plane();
    plane2 = new Plane();
    plane3 = new Plane();
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
  it('airport can land multiple planes and then', function(){
    plane1.land(airport);
    plane2.land(airport);
    plane3.land(airport);
    expect(airport.planes()).toEqual([plane1,plane2,plane3]);
    plane1.takeOff(airport);
    plane3.takeOff(airport);
    expect(airport.planes()).toEqual([plane2]);

  });


});
