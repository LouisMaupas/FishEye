function media () {
// groupe les media par id (de photographe) et les push dans medias[]
  function runAllMedia (id) {
    let allMedias = datas[0].media.filter(media => media.photographerId === id)
    return medias.push(allMedias)
  }

  // fonnction pour récupérer les medias du photographes voulu
  function runMedia (id) {
    let myMedia = datas[0].media.filter(media => media.photographerId === id)
  }

  // création 1 par 1 des groupes de media
  runAllMedia(mimi)
  runAllMedia(ellie)
  runAllMedia(tracy)
  runAllMedia(nabeel)
  runAllMedia(rhode)
  runAllMedia(marcel)
}
