'use strict';

// Import the interface to Tessel hardware
const tessel = require('tessel')
var ambientlib = require('ambient-attx4')
var servolib = require('servo-pca9685')

var servo = servolib.use(tessel.port['A'])
var servo1 = 1;

var ambient = ambientlib.use(tessel.port['B'])

var trigger = 0;

// Ambient Detection

// servo.on('ready', function (){
//   ambient.on('ready', function(){

//     ambient.setLightTrigger(0.017)


//     ambient.on('light-trigger', function(data){

//       servo.configure(servo1, 0.05, 0.12, function(){
//         let position = 0;

//         ambient.clearLightTrigger()

//         setTimeout(function(){
//           servo.move(servo1, position);
//           position += 1;
//           if(position > 1){
//             position = 0;
//           }
//         }, 500)
//       })

//     })

//   })
// })

servo.on('ready', function () {
  var position = 0;
  servo.configure(servo1, 0.05, 0.12, function () {
    setInterval(function () {

      servo.move(servo1, position);

      position += 0.5;
      if (position > 1) {
        position = 0;
      }
    }, 500);
  });
});

