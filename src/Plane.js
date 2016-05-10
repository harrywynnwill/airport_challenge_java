'use strict';
function Plane(){}
Plane.prototype.land = function(airport) {
  airport.clearForLanding(this); //this is refering to the plane object
  this._location = airport;
};
Plane.prototype.takeOff = function(airport) {
  this._location.clearForTakeOff(''); //whats going on here?? calling the method from airport that clears the hangar.
};
