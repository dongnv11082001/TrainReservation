export const getIcon = (id: string) => {
  if (+id < 10) id = '0' + id
  return `https://developer.accuweather.com/sites/default/files/${id}-s.png`
}
