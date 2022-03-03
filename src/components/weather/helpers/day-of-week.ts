export default function getShortDayOfWeek(countDayAfterNow:number) {
  const dayMilliseconds = 86400000;
  const nowMilliseconds = new Date().getTime();
  const dayOfWeek = new Date(nowMilliseconds+(dayMilliseconds*countDayAfterNow));
  const shortDaysName = dayOfWeek.toString().split(' ')[0];
  return {
    nameDayOfWeek: shortDaysName,
    dateDay: dayOfWeek.getDate()
  };
}