/**
 * Gère l'affichage et les evenements de la page d'accueil
 */
function homePagebuilder (photographers) {
  const main = document.getElementById('main')
  let i = -1
  for (const photographer of photographers) {
    i++
    const photographerNameWithoutSpace = photographer.name.replace(/ /g, '')
    if (main) {
      main.insertAdjacentHTML('afterbegin', `<article id="photographerTags${i}" class="grid-item">
      <a href="./html/photo.html?photo=${i}">
              <img class="picture-profil" src="./public/img/SamplePhotos/PhotographersIdPhotos/${photographerNameWithoutSpace}.jpg" alt="${photographer.name}">
          <div class="index-title">${photographer.name}</div>
      </a>
      <p>
          <span class="paragraph-title">${photographer.city}</span><br/>
          ${photographer.tagline}<br/>
          <span class="paragraph-price">${photographer.price}€/jour</span>
      </p>    
      <div id="tags${i}">
      </div>
      </article>`)

      const tagLoop = document.getElementById('tags' + i)
      const photoLoop = document.getElementById('photographerTags' + i)
      for (const getTag of photographer.tags) {
        tagLoop.insertAdjacentHTML('afterbegin', `
        <span class="${getTag} link nav-link"><a href="#">#${getTag}</a></span>`)
        photoLoop.classList.add(`${getTag}`)
      }
    }
  }

  /**
   * Gère les tags de la page d'accueil, trie l'affichage des photographes sur la page d'accueil selon le filtre (tag) cliqué
   */
  const tags = document.querySelectorAll('.nav-link')
  const articlePhotographers = document.querySelectorAll('article')
  for (let i = 0; i < tags.length; i++) {
    tags[i].addEventListener('click', function (e) {
      e.preventDefault()
      let tag = tags[i].classList[0]
      tag = tag.toString()
      console.log(tag)
      for (let i = 0; i < articlePhotographers.length; i++) {
        console.log(articlePhotographers[i])
        if (articlePhotographers[i].classList.contains(tag)) {
          articlePhotographers[i].classList.remove('display-none')
        } else {
          articlePhotographers[i].classList.add('display-none')
        }
      }
    })
  }

  /**
   * Si un tag est passé en parametre, le recupere pour afficher les photographes en rapprot avec ce tag
   */
  const homeUrl = new URLSearchParams(window.location.search)
  const tagFromphotographers = homeUrl.get('tag')
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
const anchorUp = document.getElementById('anchor-up')
window.addEventListener('scroll', () => {
  if (anchorUp) {
    anchorUp.classList.remove('d-none')
  }
})
