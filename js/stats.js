// stats.js

'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270); // тень прямоугольника


  ctx.fillStyle = '#FFFFFF'; // прямоугльник с результатами
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000000'; // текст внутри прямоугольника
  ctx.font = '14px PT Mono';
  ctx.fillText('Ура, вы победили!', 120, 40);
  ctx.fillText('Список результатов: ', 120, 60);

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

  ctx.fillText('Худшее время: ' + max.toFixed() + 'мс у игрока ' + names[maxIndex], 120, 80);

  var barWidth = 50; // px
  var indent = 100; // px
  var initialX = 120; // px
  var initialY = 100; // px
  var lineHeight = 20; // px
  var colors = ['rgba(215, 84, 20, 0.9)', 'rgba(124, 176, 20, 0.9)', 'rgba(124, 176, 157, 0.9)', 'rgba(124, 176, 255, 0.9)'];

  for (i = 0; i < times.length; i++) {
    ctx.fillStyle = colors[i];
    ctx.fillRect(initialX + indent * i, initialY, barWidth, times[i] * step);
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], initialX + indent * i, initialY + histogramWidth + lineHeight);
  }
};
