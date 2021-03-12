const isLeapYear = (nb) => {
  if ((nb % 4 === 0 && nb % 100 !== 0) || (nb % 400 === 0)) {
    return true
  } else {
    return false
  }
}

console.log(isLeapYear(2016))