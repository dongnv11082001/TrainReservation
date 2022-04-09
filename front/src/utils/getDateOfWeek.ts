import moment from 'moment'

export const getDateOfWeek = (dateString: string): string => {
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  return weekday[moment(dateString).day()]
}
