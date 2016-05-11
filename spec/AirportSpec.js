'use strict';


describe('Airport',function(){
  var airport;
  var plane;
  var weather;
  beforeEach(function(){
    airport = new Airport(weather);
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    plane = jasmine.createSpy('plane');
  })
  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });
  describe('under normal condition', function(){

      beforeEach(function(){
        spyOn(airport,'isStormy').and.returnValue(true);
        //airport._weather.isStormy.and.returnValue(true);
      });


  it('can clear planes for landing', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });
  it('clears plane for take off', function(){
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });

});
describe('under stormy conditions',function(){
  beforeEach(function(){
    weather.isStormy.and.returnValue(true);
  });

  it('can check for stormy conditions',function(){
    expect(airport.isStormy()).toBeFalsy();
  });

  describe('under stormy conditions',function(){
    it('does not clear planes for takeoff', function(){
      spyOn(airport,'isStormy').and.returnValue(true);
      expect(function(){ airport.clearForTakeOff(plane); }).toThrowError('cannot takeoff during storm');
    });
  });
});
});
