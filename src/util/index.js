import { getWeeksInMonth, startOfMonth, subDays, addDays } from 'date-fns';

export const getCalendarDays = (date) => {
  const calendarDays = [];
  const dayWeekOfFirstDayInMonth = startOfMonth(date).getDay();
  const weeksInMonth = getWeeksInMonth(date);
  //получаю частичку предыдущего месяца
  let prevDay = subDays(startOfMonth(date), 1);
  for (let i = 0; i < dayWeekOfFirstDayInMonth; i++) {
    calendarDays.unshift(prevDay);
    prevDay = subDays(prevDay, 1);
  }
  //если в месяце 4 недели - добавляю целую неделю предыдушего месяца
  if (weeksInMonth === 4) {
    for (let i = 0; i < 7; i++) {
      calendarDays.unshift(prevDay);
      prevDay = subDays(prevDay, 1);
    }
  }
  //получаю все дни текующего месяца и частичку следующего 
  //если в месяце 4 недели - добавляю целую неделю следующего месяца
  let day = startOfMonth(date);
  while (calendarDays.length < 42) {
    calendarDays.push(day);
    day = addDays(day, 1);
  }
  return calendarDays;
}

export const lettersWeek = ['s', 'm', 't', 'w', 't', 'f', 's'];
