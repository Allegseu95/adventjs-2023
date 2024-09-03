function calculateTime(deliveries) {
  const signo = { true: '-', false: '' };
  let time = 7 * 3600;

  for (const delivery of deliveries) {
    const [hours, minutes, seconds] = delivery.split(':');
    time += -hours * 3600 - minutes * 60 - seconds;
  }
  const bool = time > 0;
  time = Math.abs(time);

  const seconds = time % 60;
  const minutes = Math.trunc(time / 60) % 60;
  const hours = (Math.trunc(time / 60) - minutes) / 60;

  const formated_time =
    `${hours}`.padStart(2, '0') +
    ':' +
    `${minutes}`.padStart(2, '0') +
    ':' +
    `${seconds}`.padStart(2, '0');

  return signo[bool] + formated_time;
}

console.log(calculateTime(['01:01:01', '03:59:59', '01:01:01', '00:57:58']));
// "-00:00:01"

console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']));
// // '-02:20:00'

console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00']));
// // '00:30:00'
console.log(calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30']));
// '-05:29:00'
