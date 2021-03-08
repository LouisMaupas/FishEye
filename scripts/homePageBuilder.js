// Une fonction qui gere les filtres sur la home page pour afficher les bons photographges associés aux tags
function homePagebuilder () {
  let tags = document.querySelectorAll('.nav-link')
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
}

// TRANSFERT VERS LA PAGE DU BON PHOTOGRAPHE :
// JE RECUPERE le photographe sur lequel l'utilisateur clic
// on construir l'url
// on redirige vers cette url
// https://developer.mozilla.org/fr/docs/Web/API/Element/insertAdjacentHTML

// URL
// const url = 'http://127.0.0.1:5501/'
// const urlJson = new URL('/datas.json', url)

const URL_PHOTOGRAPHE_ZERO = new URL('?photo=0', url)
const URL_PHOTOGRAPHE_ONE = new URL('?photo=1', url)
console.log(URL_PHOTOGRAPHE_ZERO, URL_PHOTOGRAPHE_ONE)

// console.log(photographers)
// console.log(photographers[0])

// document.getElementById('test')

// let urlVar = window.location.search 
// if (urlVar)