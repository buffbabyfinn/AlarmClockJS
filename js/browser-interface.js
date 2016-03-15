var alarmClock = require('./../js/alarm-clock.js').alarmClock;
var moment = require('moment');

$(document).ready(function(){
  var date = alarmClock();
   $('#time').prepend("today " + date);
});
