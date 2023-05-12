
const SUBTRACTED_DAYS = 30
const getLastThirtyDaysDate: () => string = () => {
  const currentDate = new Date()
  currentDate.setDate(currentDate.getDate() - SUBTRACTED_DAYS)
  const year = currentDate.getFullYear()
  const month = String(currentDate.getMonth() + 1).padStart(2, '0')
  const day = String(currentDate.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export default getLastThirtyDaysDate
