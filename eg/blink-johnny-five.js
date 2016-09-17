var five = require("johnny-five");
var EtherPort = require("../");
var board = new five.Board({
  port: new EtherPort(3030)
});

board.on("ready", function() {
  var led = new five.Led(8);
  led.blink(500);
});

board.on("error", function(error) {
  console.log("error", error);
});
