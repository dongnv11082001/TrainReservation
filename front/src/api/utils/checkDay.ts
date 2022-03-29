import moment from 'moment'

export const isDay = (): boolean => (moment().hour() < 18 ? true : false)
