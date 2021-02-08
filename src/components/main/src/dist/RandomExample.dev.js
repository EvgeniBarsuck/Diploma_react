"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomInteger = randomInteger;
exports.getRandomExample = void 0;

var getRandomExample = function getRandomExample(massItem) {
  var massOf5 = [];
  var count;
  massItem.length > 4 ? count = 5 : count = massItem.length;

  for (var i = 0; i < count; i++) {
    var random = randomInteger(0, massItem.length - 1);

    if (!massOf5.includes(massItem[random])) {
      massOf5.push(massItem[random]);
    } else {
      i--;
    }
  }

  return massOf5;
};

exports.getRandomExample = getRandomExample;

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}