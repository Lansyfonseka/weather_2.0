export default function getShortDayOfWeek(countDayAfterNow: number) {
  const dayMilliseconds = 86400000;
  const nowMilliseconds = new Date().getTime();
  const dayOfWeek = new Date(nowMilliseconds + dayMilliseconds * countDayAfterNow);
  return {
    day: dayOfWeek.getDay(),
    date: dayOfWeek.getDate(),
  };
}
