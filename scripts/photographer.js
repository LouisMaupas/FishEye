function photographer () {
  // recupere les photographes par ID et les stocks dans photographers[]
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

  // création de variables contenant 1 seul photographe
  // let mimiDatas = photographers[0]
  // let ellieDatas = photographers[1]
  // let tracyDatas = photographers[2]
  // let nabeelDatas = photographers[3]
  // let rhodeDatas = photographers[4]
  // let marcelDatas = photographers[5]
}
