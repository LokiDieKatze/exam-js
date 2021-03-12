const podium = (array) => {
  let array2 = array
  array2.sort((a, b) => (b - a))
  let str = `1st: ${array2[0]}\n 2nd: ${array2[1]}\n 3rd: ${array2[2]}`
  return str
}

console.log(podium([1, 9, 18, 20, 17, 15]))