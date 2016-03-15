  // exports.Clock = function() {
  //   return moment().format('h:mm a');
  // };
  exports.timeLapse = function() {
    var clock = moment().format("h:mm:ss a");
    document.getElementById('time').innerHTML = clock;

  };


  exports.checkAlarm = function(time) {
    console.log(moment().format('h:mm a'));
    console.log(time);
    if(moment().format('h:mm a') == time) {
      document.getElementById('alarmImage').click();
      console.log("WAKE UP");
    } else {
      console.log("Keep sleeping");
    }

  };
