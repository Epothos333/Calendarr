export function getDatesInRange() {
  const d1 = new Date('2023-01-01');
  const d2 = new Date('2023-12-31');
  const date = new Date(d1.getTime());
  let dayOfYear = 1;
  let week = 1;

  const dates = [];

  while (date <= d2) {
    const dayOfWeek = date.getDay();

    const dateData = {
      id: dayOfYear,
      date: new Date(date),
      weekend: dayOfWeek === 4 || dayOfWeek === 5 || dayOfWeek === 6,
      week,
    };
    if (dayOfWeek === 6) {
      week++;
    }

    dates.push(dateData);
    date.setDate(date.getDate() + 1);
    dayOfYear++;
  }

  return dates;
}

export function getWeekendsInRange() {
  const d1 = new Date();
  const d2 = new Date('2023-12-31');
  const date = new Date(d1.getTime());
  let dayOfYear = 1;
  let week = 1;

  const dates = [];
  let weekendGroup = [];

  while (date <= d2) {
    const dayOfWeek = date.getDay();

    const dateData = {
      id: dayOfYear,
      date: new Date(date),
      weekend: dayOfWeek === 4 || dayOfWeek === 5 || dayOfWeek === 6,
      week,
    };

    if (dayOfWeek === 4 || dayOfWeek === 5 || dayOfWeek === 6) {
      weekendGroup.push(dateData);
    }

    if (dayOfWeek === 6) {
      week++;
      dates.push(weekendGroup);
      weekendGroup = [];
    }

    date.setDate(date.getDate() + 1);
    dayOfYear++;
  }

  return dates;
}
