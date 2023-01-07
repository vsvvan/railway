import dayjs from 'dayjs';

export const getDescDay = (date: string) => {
  const dayOfWeek = dayjs(date).day();
  console.log('11', dayOfWeek);
  console.log(dayjs(new Date()).format('DD.MM.YYYY'));
  if (dayjs(date).diff(dayjs(new Date()).format('DD.MM.YYYY'), 'day') === 0) {
    return 'Today';
  } else if (
    dayjs(date).diff(dayjs(new Date()).format('DD.MM.YYYY'), 'day') - 30 ===
    1
  ) {
    return 'Tomorrow';
  } else {
    switch (dayOfWeek) {
      case 4:
        return 'Sunday';
      case 5:
        return 'Monday';
      case 6:
        return 'Tuesday';
      case 0:
        return 'Wednesday';
      case 1:
        return 'Thursday';
      case 2:
        return 'Friday';
      case 3:
        return 'Saturday';
    }
  }
};
