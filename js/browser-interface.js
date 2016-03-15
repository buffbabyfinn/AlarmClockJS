var timeLapse = require('./../js/alarm-clock.js').timeLapse;
var checkAlarm = require('./../js/alarm-clock.js').checkAlarm;

$(document).ready(function(){
  $('#time').text(timeLapse());
  setInterval(timeLapse, 500);
  $('#alarm-form').submit(function(event) {
    var alarmInput = $('#alarmInput').val();
    var alarm = moment(alarmInput, 'h:mm a').format('h:mm a');
    setInterval( function() {
      checkAlarm(alarm);
      }, 1000);
    $('#output').text("Your alarm will go off at " + alarm + ".");
    console.log(alarm);
    event.preventDefault();
  // $('#snoozeTime').val("");
  // var snoozeTime = moment(clock).to(moment(alarm));
  // var snoozeFormat = moment(snoozeTime).format('h:mm a')
  // $('#snoozeTime').prepend("Your alarm will go off in " + snoozeTime + " minutes. Rest up!");
  });
});
