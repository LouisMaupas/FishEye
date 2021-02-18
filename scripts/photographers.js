function photographer () {


  // enregistre / crée les photographes
  function runPhotographer (id) {
    datas[0].photographers.forEach(element => {
      if (element.id === id) {
        return photographers.push(element)
      } else {
      }
    })
  }

 // création des photographes et stock dans photographers []
  runPhotographer(mimi)
  runPhotographer(ellie)
  runPhotographer(tracy)
  runPhotographer(nabeel)
  runPhotographer(rhode)
  runPhotographer(marcel)
}
