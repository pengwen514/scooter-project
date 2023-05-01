const User = require('./User');


class Scooter extends User{
  constructor(station, username){
    super(username);
    this.station = station
    this.user = { }
    this.isBroken = false
    this.charge = Math.floor(Math.random()* 101)
    this.serial = null;
    this.nextSerial = 1;
  }
  rent()
  {
    if(this.charge < 20 && this.isBroken === false){
      this.user = username;
      this.station = null;
      this.serial += this.nextSerial;
      this.nextSerial++;
    }
  }

dock(station){
  this.station = station
  this.user = {};
}


}


module.exports = Scooter
