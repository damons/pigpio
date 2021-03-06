'use strict';

var pigpio = require('../'),
  Gpio = pigpio.Gpio,
  led = new Gpio(17, {mode: Gpio.OUTPUT});

led.digitalWrite(1);

setTimeout(function () {
  pigpio.terminate();

  // Creating a new Gpio object should automatically re-initialize
  // the pigpio library.
  led = new Gpio(17, {mode: Gpio.OUTPUT});

  // If the pigpio library was not re-initialized calling digitalWrite will
  // result in an excption. See https://github.com/fivdi/pigpio/issues/34
  led.digitalWrite(0);
}, 500);

