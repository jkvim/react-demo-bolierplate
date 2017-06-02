(function () {
  let canvas,
    context;

  init();
  requestAnimationFrame(animate);

  function init() {
    canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 200;
    context = canvas.getContext('2d');
    document.querySelector('#time-animation').appendChild(canvas);
  }

  // rAFing animation() in the event that more than the timer needs to be drawn
  function animate() {
    drawTime();
    requestAnimationFrame(animate);
  }

  // vars needed to compare diffs between frames
  let lastDiff = 0;
  let lastTime = 0;
  let displayTime = 0;
  let alpha = 1;
  let changeTime = 0;

  function drawTime() {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const now = new Date(Date.now());

    const year = now.getYear();
    const month = now.getMonth();
    const date = now.getDate();
    const day = now.getDay();
    let hours = now.getHours();
    let mins = now.getMinutes();
    let secs = now.getSeconds();
    let ms = now.getMilliseconds();

    // add some zeros to keep time strings the same length
    if (hours < 10) hours = `0${hours}`;
    if (mins < 10) mins = `0${mins}`;
    if (secs < 10) secs = `0${secs}`;
    if (ms < 10) {
      ms = `00${ms}`;
    } else if (ms < 100 && ms >= 10) {
      ms = `0${ms}`;
    }

    const dateString = `${days[day]}, ${date} ${months[month]} ${parseInt(1900 + year)}`;
    const timeString = `${hours}:${mins}:${secs}:${ms}`;

    // calc the time diff between frames, starting with the second frame
    if (lastTime > 0) {
      frameTimeDiff = now - lastTime;
    } else {
      frameTimeDiff = null;
    }

    // threshold for shown jank is >50ms
    // mark time when the jank occured
    if (frameTimeDiff > lastDiff && frameTimeDiff > 50) {
      displayTime = frameTimeDiff;
      changeTime = now;
      alpha = 1;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.font = '24px sans-serif';
    context.fillStyle = 'rgba(41,72,96,1)';
    context.fillText(`Date: ${dateString}`, 0, 50);
    context.fillText(`Time: ${timeString}`, 0, 75);

    // fade out the "Jank Spotted" timer after 3 secs
    if (changeTime !== 0 && now - changeTime > 3000 && alpha > 0) {
      alpha -= 0.05;
    }

    context.font = '36px sans-serif';
    context.fillStyle = `rgba(41,72,96,${alpha})`;
    if (displayTime > 0) {
      context.fillStyle = 'indianred';
      context.fillText(`Jank spotted: ${displayTime}ms`, 0, 125);
      context.fillText('Try use web-worker to', 0, 160);
      context.fillText('remove this banner.', 0, 193);
    }

    // save the data about this frame for future comparison
    lastTime = now;
    lastDiff = frameTimeDiff;
  }
}());
