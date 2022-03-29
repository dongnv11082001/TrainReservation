import moment from 'moment'

export const getDateOfWeek = (dateString: string): string => {
  return moment(dateString).format('h:mm a')
}
