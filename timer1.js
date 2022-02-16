// filter process.argv from nonNumbers and numbers less than 0;
const args = process.argv.filter(elm => !isNaN(elm) && elm >= 0);


const setAlarm = function(alarms) {
  // Create new array populated with numbers;
  let timers = alarms.map(a => Number(a));
  
  for ( const elm of timers) {
    setTimeout(() => { 
      process.stdout.write(`${elm} seconds \x07\n`);
    },elm * 1000);
  }
}

setAlarm(args);