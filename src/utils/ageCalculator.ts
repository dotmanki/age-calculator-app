export const dayMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30]

export const calculate = (
  inputYear: number,
  inputMonths: number,
  inputDate: number
): { years: number; months: number; date: number } => {
  const today = new Date()
  const birthDate = new Date(inputYear, inputMonths, inputDate)

  let years = today.getFullYear() - birthDate.getFullYear()
  const months = today.getMonth() - birthDate.getMonth()
  if (today.getMonth() < birthDate.getMonth()) years--

  let date = today.getDate() - birthDate.getDate()

  if (today.getDate() < birthDate.getDate()) date += dayMonths[today.getMonth()]

  return { years, months, date }
}
