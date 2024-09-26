function getDayOfWeek(dateString) {
  const daysOfWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const date = new Date(dateString);
  return daysOfWeek[date.getDay()];
}

console.log(getDayOfWeek("2024-09-23"));
