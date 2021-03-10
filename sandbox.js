// first need to track how many actual hours of sleep user gets each night

const getSleepHours = (day) => {
  switch (day) {
    case 'sunday':
      return 5;
    case 'monday':
      return 6;
    case 'tuesday':
      return 7;
    case 'wednesday':
      return 8;
    case 'thursday':
      return 5;
    case 'friday':
      return 2;
    case 'saturday':
      return 4;
      break;
  }
};

// calculate total hours user slept in the 7 day period

const getActualHoursSlept = () => {
  return (
    getSleepHours('sunday') +
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday')
  );
};

// need to define total the ideal sleep hours in a week

const getIdealSleepHours = () => {
  let ideal = 7 * 7;
  return ideal;
};

// now we need to calculate the sleep debt

const calculateSleepDebt = () => {
  let actualSleepHours = getActualHoursSlept();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log(
      'good job! You slept ' +
        actutalSleepHours +
        '! That is the perfect amount!'
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      'You got ' +
        actualSleepHours +
        ' hours of sleep this week. You need ' +
        (idealSleepHours - actualSleepHours) +
        ' more hours!'
    );
  }
};

calculateSleepDebt();
