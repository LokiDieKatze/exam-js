const information = (firstName, familyName, age) => {
  if (age > 18) {
    return `prenom: ${firstName} \n nom: ${familyName}\n age: ${age}\n vous êtes majeur depuis: ${age - 18} ans`
  } else if (age < 18) {
    return `prenom: ${firstName} \n nom: ${familyName}\n age: ${age}\n vous serez majeur dans: ${18 - age} ans`
  } else {
    return `prenom: ${firstName} \n nom: ${familyName}\n age: ${age}\nvous êtes majeur`
  }
}

console.log(information('Sarah', 'Marques', 17))