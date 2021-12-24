function getNumFromStr(str: string) {
  const num_g = str.match(/\d+/g)
  return num_g
}

export function currencyFormat(str: string) {
  const num = getNumFromStr(str)
  if (!num) return 'N/A'

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'TWD',
    minimumFractionDigits: 0,
  })
  return formatter.format(Number(num[0]))
}
