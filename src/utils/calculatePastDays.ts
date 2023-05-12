const DAY_IN_MILLISECONDS = 24 * 3600 * 1000

const calculatePastDays: (date: string) => number = (date) => {
  const currentDate = new Date()
  const targetedDate = new Date(date)
  const differentTiming = Math.ceil((currentDate.getTime() - targetedDate.getTime()) / DAY_IN_MILLISECONDS)
  return differentTiming
}

export default calculatePastDays
