//stats.js

'use strict';

window.renderStatistics = function(ctx, names, times) {
  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000000';
  ctx.font = '14px PT Mono';
  ctx.fillText('Ура, вы победили!', 120, 40);

  var max = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramWidth = 150;
  var step = histogramWidth / (max - 0);

  ctx.fillText('Худшее время: ' + max + 'мс у игрока ' + names[maxIndex], 120, 60);

  var barHeight = 20;  //px
  var indent = 40;     //px
  var initialX = 120;  //px
  var initialY = 80;   //px
  var lineHeight = 15; //px

  for (var i = 0; i < times.length; i++) {
    ctx.fillRect(initialX, initialY + indent * i, times[i] * step, barHeight);
    ctx.fillText(names[i], initialX + histogramWidth + barHeight, initialY + lineHeight + indent * i);
  }
};
