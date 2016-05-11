function Weather(){
  this._CHANCE_OF_STORMY = 0.5; //a pseudo constant
}
Weather.prototype.isStormy = function(){
  return (Math.random() > this._CHANCE_OF_STORMY);
};
