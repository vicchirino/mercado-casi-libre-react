export function percent(num) {
  return num * 100
}

export function round(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100
}

export function average(arr) {
  const filteredResults = arr.filter(i => !!i)
  return filteredResults.reduce((acc, v) => acc + v, 0) / filteredResults.length
}
