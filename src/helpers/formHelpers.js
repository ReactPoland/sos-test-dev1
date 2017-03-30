export const prepareInputLabel = (isInvalid, text) => {
  let label = {
    text
  }
  if (isInvalid) {
    label.text = text + isInvalid
    label.color = '#da3340'
  }
  return label
}

export const isValidState = (invalidStates) => {
  let isValidFrom = true
  Object.keys(invalidStates).map(fieldName => {
    isValidFrom = isValidFrom && !invalidStates[fieldName]
  })

  return isValidFrom
}

export const correctDate = (year, month, day) => {
  month = month - 1
  month = parseInt(month, 10)
  day = parseInt(day, 10)
  year = parseInt(year, 10)
  if (isNaN(month) || isNaN(day) || isNaN(year)) return false

  // month 0 - 11
  if (month < 0 || month > 11) return false

  // day 1 - count from month
  const lastDay = new Date(year, month + 1, 0).getDate()
  if (day < 1 || day > lastDay) return false

  return true
}

export const isOlder18 = (year, month, day) => {
  month = month - 1
  const bornDay = new Date(year, month, day)
  const nowDay = new Date()
  const isOlder = (nowDay.getTime() - bornDay.getTime() - 567993600000 - (1000 * 60 * 60 * 24)) > 0
  return isOlder
}
// TODO: move checking via reg exp
