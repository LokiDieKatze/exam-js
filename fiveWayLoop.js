const tab = ['Marine', 'Camille', 'Baptiste', 'Jean', 'Bea']

//boucle while
let i = -1
while (i < tab.length) {
  i++
  console.log(`${tab[i]}, length: ${tab[i].length}`)
}

//boucle do while
let j = -1
do {
  j++
} while (j < tab.length)
console.log(`${tab[j]}, length: ${tab[j].length}`)
