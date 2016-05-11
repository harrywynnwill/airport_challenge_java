'use strict';

function Airport(weather) {
this._hangar = [];
this._weather = weather;


Airport.prototype.planes = function () { return this._hangar; };

Airport.prototype.clearForLanding = function(plane) {
if(this._weather.isStormy()){
  throw new Error('cannot land during storm');
}
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function (plane) {
  if(this._weather.isStormy()){
    throw new Error('cannot takeoff during storm');
  }
  var indexOfPlane = this._hangar.indexOf(plane);
  this._hangar.splice(indexOfPlane, 1); //clear the hangar
};

Airport.prototype.isStormy = function () {
  return this._weather.isStormy();
};
}
