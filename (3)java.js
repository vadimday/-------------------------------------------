function daysUntilNewYear() {
  const today = new Date();
  const nextYear = today.getFullYear() + 1;
  const newYearDate = new Date(nextYear, 0, 1);
  const msPerDay = 1000 * 60 * 60 * 24;
  const daysRemaining = Math.ceil((newYearDate - today) / msPerDay);

  const isLeapYear =
    (today.getFullYear() % 4 === 0 && today.getFullYear() % 100 !== 0) ||
    today.getFullYear() % 400 === 0;

  return {
    daysRemaining,
    isLeapYear,
  };
}

console.log(daysUntilNewYear());
