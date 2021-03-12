const tab = ['Marine', 'Camille', 'Baptiste', 'Jean', 'Bea']

for (i = 0; i < tab.length; i++) {
  console.log(`${tab[i]}, length: ${tab[i].length}`)
}
console.log('')

for (const elem of tab) {
  console.log(`${elem}, length: ${elem.length}`)
}
console.log('')

tab.forEach((elem) => {
  console.log(`${elem}, length: ${elem.length}`)
})