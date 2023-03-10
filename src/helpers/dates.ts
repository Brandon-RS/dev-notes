export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

export const getEntryDate = (dateString: string | number) => {
  const date = new Date(dateString)
  return {
    day: date.getDate(),
    month: months[date.getMonth()],
    yearDay: `${date.getFullYear()}, ${days[date.getDay()]}`
  }
}
