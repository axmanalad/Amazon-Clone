export function isWeekend(date) {
  const dayOfWeek = date.format('dddd');
  return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
}