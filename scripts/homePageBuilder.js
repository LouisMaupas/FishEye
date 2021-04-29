/**
 * Une fonction qui trie l'affichage des photographes sur la page d'accueil selon le filtre (tag) cliqué
 */
function homePagebuilder () {
  /**
   * Gère les tags de la page d'accueil
   */
  const tags = document.querySelectorAll('.nav-link')
  const photographers = document.querySelectorAll('article')
  for (let i = 0; i < tags.length; i++) {
    tags[i].addEventListener('click', function (e) {
      e.preventDefault()
      let tag = tags[i].classList[0]
      tag = tag.toString()
      for (let i = 0; i < photographers.length; i++) {
        if (photographers[i].classList.contains(tag)) {
          photographers[i].classList.remove('display-none')
        } else {
          photographers[i].classList.add('display-none')
        }
      }
    })
  }

  /**
   * Si un tag est passé en parametre, le recupere pour afficher les photographes en rapprot avec ce tag
   */
  let homeUrl = new URLSearchParams(window.location.search)
  let tagFromphotographers = homeUrl.get('tag')
  if (tagFromphotographers) {
    for (let i = 0; i < photographers.length; i++) {
      if (photographers[i].classList.contains(tagFromphotographers)) {
        photographers[i].classList.remove('display-none')
      } else {
        photographers[i].classList.add('display-none')
      }
    }
  }
}

/**
 * Fais apparaitre le bouton "passer au contenu" au scroll
 */
let anchorUp = document.getElementById('anchor-up')
window.addEventListener('scroll', () => {
  if (anchorUp) {
    anchorUp.classList.remove('d-none')
  }
})
