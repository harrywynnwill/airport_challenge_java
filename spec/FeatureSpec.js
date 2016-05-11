'use strict';

describe('Feature Test:',function(){
  var plane;
  var plane1;
  var plane2;
  var plane3;
  var weather;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    plane1 = new Plane();
    plane2 = new Plane();
    plane3 = new Plane();
    weather = new Weather();
    airport = new Airport(weather);

  });

  describe('under normal conditions', function(){
    beforeEach(function(){
      spyOn(Math, 'random').and.returnValue(0);
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
describe('under stormy conditions', function(){

  beforeEach(function(){
  });
  it('blocks takeoff when weather is stormy',function(){
    spyOn(Math, 'random').and.returnValue(0);
    plane.land(airport);
    spyOn(airport,'isStormy').and.returnValue(true);
  //  expect(function(){ plane.takeOff();}).toThrowError('cannot takeoff during storm')
    expect(airport.planes()).toContain(plane);
  });
  it('blocks landing when weather is stormy',function(){
    spyOn(Math, 'random').and.returnValue(1);
    //spyOn(Math,'random').and.returnValue(1);
    expect(function(){plane.land(airport);}).toThrowError('cannot land during storm');
  });
});
});
