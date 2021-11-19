const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
  dt1 = new Date(dateText1);
  dt2 = new Date(dateText2);
  return Math.floor(
    (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
      Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
      DAY_IN_MILLISECONDS
  );
}

console.log(
  `Days difference: ${getDaysBetweenDates("10/15/2020", "12/1/2020")}`
);
