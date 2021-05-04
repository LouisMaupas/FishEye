/**
 * Recupere les médias par ID et les stocks dans photographers[]
 */
function media () {
/**
 * Groupe les media par id (de photographe) et les push dans medias[]
 * @param {number} id l'id du photographe lié au media
 * @returns {Array} Des tableaux (un par photographe) contenant des objets (un objet = un media)
 */
  function runAllMedia (id) {
    const allMedias = datas[0].media.filter(media => media.photographerId === id)
    return medias.push(allMedias)
  }

  /** création photographe par photographe des medias */
  runAllMedia(mimi)
  runAllMedia(ellie)
  runAllMedia(tracy)
  runAllMedia(nabeel)
  runAllMedia(rhode)
  runAllMedia(marcel)
}
