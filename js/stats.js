// stats.js

'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270); // тень прямоугольника


  ctx.fillStyle = '#FFFFFF'; // прямоугльник с результатами
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000000'; // текст внутри прямоугольника
  ctx.font = '16px PT Mono';
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

  var barWidth = 40; // px
  var indent = 60; // px
  var initialX = 120; // px
  var initialY = 100; // px
  var lineHeight = 20; // px
  for (i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(initialX + indent * i, initialY, barWidth, times[i] * step);
      ctx.fillStyle = '#000000';
      ctx.fillText(names[i], initialX + indent * i, initialY + histogramWidth + lineHeight);
    } else {
      ctx.fillStyle = 'rgba(' + (Math.floor(Math.random() * 255)) + ', ' + (Math.floor(Math.random() * 255)) + ', ' + (Math.floor(Math.random() * 255)) + ', ' + (Math.random()) + ')';
      ctx.fillRect(initialX + indent * i, initialY, barWidth, times[i] * step);
      ctx.fillStyle = '#000000';
      ctx.fillText(names[i], initialX + indent * i, initialY + histogramWidth + lineHeight);
    }
  }
};
