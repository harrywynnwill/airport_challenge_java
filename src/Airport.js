'use strict';

function Airport(){
this._hangar = [];
}
Airport.prototype.planes = function () { return this._hangar; };

Airport.prototype.clearForLanding = function(plane) {
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function (plane) {
  var indexOfPlane = this._hangar.indexOf(plane);
  this._hangar.splice(indexOfPlane, 1); //clear the hangar
};
