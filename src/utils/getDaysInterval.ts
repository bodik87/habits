import { eachDayOfInterval, format, startOfToday, subDays } from "date-fns";

export const getDaysInterval = (myFormat: string) => {
  let daysInterval = eachDayOfInterval({
    start: subDays(startOfToday(), 4),
    end: startOfToday(),
  });
  let datesRow: string[] = [];
  daysInterval.forEach((day) => {
    datesRow.push(String(format(day, myFormat)));
  });
  return datesRow;
};
