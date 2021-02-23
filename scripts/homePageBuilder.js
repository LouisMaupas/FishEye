// En cliquant sur une étiquette (tag) dans la barre de navigation, la liste des
// photographes est filtrée pour n'afficher que ceux qui correspondent à cette
// étiquette.
// ○ Lorsque l'utilisateur clique sur la vignette d'un photographe, il est amené à sa
// page

// les elements du DOM
// const main = document.getElementById('index-main')
// const test = document.getElementById('test')
// test.innerHTML = tableauPhotographes[0].data

function homePagebuilder () {
  const tags = document.querySelectorAll('.nav-link')
  const photographers = document.querySelectorAll('article')
  console.log(photographers)
  for (let i = 0; i < tags.length; i++) {
    tags[i].addEventListener('click', function (e) {
      const tag = tags[i].id
      console.log(tag)
      for (let i = 0; i < photographers.length; i++) {
        console.log(photographers[i])
        if (photographers[i].classList.contains('.portrait')) {
          console.log('oui')
          photographers.classList.remove('display-none')
        } else {
          console.log('non')
        }
      }
    })
  }
}
