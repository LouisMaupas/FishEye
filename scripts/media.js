function media () {
// enregistre / crée les photographes
  function runAllMedia (id) {
    let allMedias = datas[0].media.filter(media => media.photographerId === id)
    return medias.push(allMedias)
  }

  // fonnction pour récupérer les medias du photographes voulu
  function runMedia (id) {
    let myMedia = datas[0].media.filter(media => media.photographerId === id)
  }

  // création des photographes et stock dans photographers []
  runAllMedia(mimi)
  runAllMedia(ellie)
  runAllMedia(tracy)
  runAllMedia(nabeel)
  runAllMedia(rhode)
  runAllMedia(marcel)
  // console.log(medias)
}
