
const MILLIONS = 1000000
const THOUSANDS = 1000

const convertNumberIntoSFormat: (num: number) => string = (num) => {
  if (num >= MILLIONS) return String((num / MILLIONS).toFixed(1)) + 'M'
  if (num >= THOUSANDS) return String((num / THOUSANDS).toFixed(1)) + 'K'
  return String(num)
}

export default convertNumberIntoSFormat
