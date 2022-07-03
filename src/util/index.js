import { getWeeksInMonth, startOfMonth, subDays, addDays } from 'date-fns';

export const get6weeks = (date) => {
  const all42Days = [];
  const dayWeekOfFirstDayInMonth = startOfMonth(date).getDay();
  const weeksInMonth = getWeeksInMonth(date);
  //получаю частичку предыдущего месяца
  let prevDay = subDays(startOfMonth(date), 1);
  for (let i = 0; i < dayWeekOfFirstDayInMonth; i++) {
    all42Days.unshift(prevDay);
    prevDay = subDays(prevDay, 1);
  }
  //если в месяце 4 недели - добавляю целую неделю предыдушего месяца
  if (weeksInMonth === 4) {
    for (let i = 0; i < 7; i++) {
      all42Days.unshift(prevDay);
      prevDay = subDays(prevDay, 1);
    }
  }
  //получаю все дни текующего месяца и частичку следующего 
  //если в месяце 4 недели - добавляю целую неделю следующего месяца
  let day = startOfMonth(date);
  while (all42Days.length < 42) {
    all42Days.push(day);
    day = addDays(day, 1);
  }
  //перевожу из 1D array в 2D
  const weeks = [];
  while (all42Days.length) {
    weeks.push(all42Days.splice(0, 7));
  }

  return weeks;
}