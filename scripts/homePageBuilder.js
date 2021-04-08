// Une fonction qui gere les filtres sur la home page pour afficher les bons photographges associés aux tags
function homePagebuilder () {
  const tags = document.querySelectorAll('.nav-link')
  const photographers = document.querySelectorAll('article')
  for (let i = 0; i < tags.length; i++) {
    tags[i].addEventListener('click', function (e) {
      let tag = tags[i].id
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

  /* */
  let homeUrl = new URLSearchParams(window.location.search)
  let tagFromphotographers = homeUrl.get('tag')
  for (let i = 0; i < photographers.length; i++) {
    if (photographers[i].classList.contains(tagFromphotographers)) {
      photographers[i].classList.remove('display-none')
    } else {
      photographers[i].classList.add('display-none')
    }
  }
}
