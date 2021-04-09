/**
 * Recupere les photographes par ID et les stocks dans photographers[]
 */
function photographer () {
  /**
   * Recupère un id et recupère toutes les informations qui corespondent pour les injecter dans photographers[]
   * @param {number} id l'id des photographes
   */
  function runPhotographer (id) {
    datas[0].photographers.forEach(element => {
      if (element.id === id) {
        return photographers.push(element)
      } else {
        // pass
      }
    })
  }

  /** Appel la fonction runPhotographer pour chaque photograpge */
  runPhotographer(mimi)
  runPhotographer(ellie)
  runPhotographer(tracy)
  runPhotographer(nabeel)
  runPhotographer(rhode)
  runPhotographer(marcel)
}
