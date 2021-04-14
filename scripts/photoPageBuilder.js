/** Une fonction retrouve le photographe par son id et stock les médias et les informations du photographe dans 2 variables */
function photoPagebuilder () {
  let photographerFromUrl
  let mediasFromUrl
  const urlSearch = new URLSearchParams(window.location.search)
  const index = parseInt(urlSearch.get('photo'))
  if (isNaN(index) || index < 0 || index > (photographers.length - 1)) {
    console.log('Ce photpgraphe n\'existe pas')
  } else {
    photographerFromUrl = photographers[index]
    mediasFromUrl = medias[index].map(media => {
      media.name = media.image ? media.image : media.video
      media.name = media.name.replace('.jpg', '').replace('.mp4', '').replace(/_/g, ' ')
      return media;
    })
    console.log(mediasFromUrl)
  }

  // On recupère les élements du DOM ...
  // ... qui serviront pour la présentation du photographe
  const title = document.querySelector('h1')
  const city = document.getElementById('city')
  const country = document.getElementById('country')
  const text = document.getElementById('text')
  const img = document.getElementById('img')
  const nameModal = document.getElementById('name-modal')
  const nav = document.getElementById('nav')
  const pictures = document.getElementById('pictures')
  // ... pour le menu dépliant de tri
  const dropdown = document.getElementById('dropdown-btn')
  const dropPopularity = document.getElementById('popularity')
  const dropTitle = document.getElementById('title')
  const dropDate = document.getElementById('date')
  const dropdownContent = document.getElementById('dropdown')
  const changeMyMenuName = document.getElementById('change-menu-name')
  // ... pour le bloc du TJM
  const tariff = document.getElementById('tariff')

  // On injecte avec innerHTML les informations du photographe
  title.innerHTML = photographerFromUrl.name
  city.innerHTML = photographerFromUrl.city + ','
  country.innerHTML = photographerFromUrl.country
  text.innerHTML = photographerFromUrl.tagline
  nameModal.innerHTML = photographerFromUrl.name

  /** Récupère dans les datas le nom et prénom séparé et les réunis sans séparation pour les injecter dans la src de l'image et afficher la photo de profil */
  const nameWithSpaces = photographerFromUrl.name
  const words = nameWithSpaces.split(' ')
  const firstNameIs = words[0]
  const lastNameIs = words[1]
  const fullNameIs = firstNameIs + lastNameIs
  const photographersProfilRoot = '../public/img/SamplePhotos/PhotographersIdPhotos/'
  img.src = photographersProfilRoot + fullNameIs + '.jpg'

  // Affiche les tags liés au photographe
  const tags = photographerFromUrl.tags
  for (const tag of tags) {
    nav.insertAdjacentHTML('afterbegin', `<a href="${url}?tag=${tag}"><span class="link">#${tag}</span>`)
  }
  diaporama()

  /** Affiche / déplie le menu de tri et change son titre */
  dropdown.addEventListener('click', function () {
    dropdownContent.classList.toggle('show')
  })
  let changeMyMenu = function (name) {
    changeMyMenuName.innerHTML = name
  }

  /**
   * Tri le diaporama d'image par date, popularité ou titre
   * @param {Property} property Une propriété d'un objet (la date d'un média par ex)
   * @returns {number} retourne 1 -1 ou 0 pour permetre à la méthode sort() de trier
   */
  function compareFunction (property) {
    return function (a, b) {
      
      if (property === 'title') {
        if (mediasFromUrl.hasOwnProperty('image')) { // mediasFromUrl qui a appellé
          property = 'image'
        } else {
          property = 'video'
        }
        return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0
      }
      
      if (property === 'date') {
        const result = (new Date(a.date) - new Date(b.date))
        return result
      }
      // const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0
      const result = (a[property] - b[property])
      console.log('* ' + result)
      return result
    }
  }
  /** On lie la fonction de tri à un evenement d'écoute sur la date et ajuste l'affichage */
  dropDate.addEventListener('click', function (e) {
    e.preventDefault()
    changeMyMenu('Date')
    dropDate.classList.add('d-none')
    dropTitle.classList.remove('d-none')
    dropPopularity.classList.remove('d-none')
    console.log(mediasFromUrl)
    mediasFromUrl.sort(compareFunction('date'))
    console.log(mediasFromUrl)

    diaporama()
    Lightbox.init()
    Like.init()
  })
  /** les titres */
  dropTitle.addEventListener('click', function (e) {
    e.preventDefault()
    changeMyMenu('Titre')
    dropTitle.classList.add('d-none')
    dropDate.classList.remove('d-none')
    dropPopularity.classList.remove('d-none')
    mediasFromUrl.sort(compareFunction('title'))
    diaporama()
    Lightbox.init()
    Like.init()
  })
  /** la popularité */
  dropPopularity.addEventListener('click', function (e) {
    e.preventDefault()
    changeMyMenu('Popularité')
    dropPopularity.classList.add('d-none')
    dropDate.classList.remove('d-none')
    dropTitle.classList.remove('d-none')
    mediasFromUrl.sort(compareFunction('likes'))
    diaporama()
    Lightbox.init()
    Like.init()
  })

  /** Au clic sur le bouton like incrémente le compteur de like */
  class Like {
    static init () {
      const likeBtnArray = Array.from(document.querySelectorAll('.like'))
      likeBtnArray.forEach(likeBtn => likeBtn.addEventListener('click', e => {
        const counterIntAfterLiked = parseInt(likeBtn.previousSibling.textContent) + 1
        const counterStringAfterLiked = counterIntAfterLiked.toString()
        likeBtn.previousSibling.innerHTML = counterStringAfterLiked
      }))
    }
  }
  Like.init()

  /** Affiche les médias du photographe */
  function diaporama () {
    pictures.innerHTML = ''
    for (const media of mediasFromUrl) {
      const NumberOfLikes = media.likes
      if (media.image) {
        const searchRegExp = /.jpg|.mp4/g
        const replaceWith = ''
        const searchRegExpTwo = /_/g
        const replaceWithTwo = ' '
        const imageName = media.image.replace(searchRegExp, replaceWith).replace(searchRegExpTwo, replaceWithTwo)
        pictures.insertAdjacentHTML('afterbegin', `<figure>
      <a style="text-decoration: none; color: black;" href="#">
          <img class="slideshow" src="../public/img/SamplePhotos/${photographerFromUrl.name}/${media.image}" alt="Une photo"/>
      </a>
      <figcaption class="df fd-r jc-sb">
          <div class="pictures__title">${imageName}</div>
          <span class="price">${media.price}€</span> 
          <span class="likes">
            <span class="counter">${NumberOfLikes}</span><span class="like"><i class="fas fa-heart"></i></span>
          </span>
      </figcaption>
  </figure>`)
      } else if (media.video) {
        const searchRegExp = /.jpg|.mp4/g
        const replaceWith = ''
        const searchRegExpTwo = /_/g
        const replaceWithTwo = ' '
        const videoName = media.video.replace(searchRegExp, replaceWith).replace(searchRegExpTwo, replaceWithTwo)
        pictures.insertAdjacentHTML('afterbegin', `<figure>
      <a style="text-decoration: none; color: black;" href="#">
          <video src="../public/img/SamplePhotos/${photographerFromUrl.name}/${media.video}" controls poster="../public/img/play.svg" height="300" width="350">vidéo</video>
          <!-- <img class="slideshow" src="../public/img/play.svg" alt="Une photo"/> -->
      </a>
      <figcaption class="df fd-r jc-sb">
          <span class="pictures__title">${videoName}</span>
          <span class="price">${media.price}€</span> 
          <span class="likes">
            <span class="counter">${NumberOfLikes}</span><span class="like"><i class="fas fa-heart"></i></span>
          </span>
      </figcaption>
  </figure>`)
      }
    }
  }

  /** Affiche le bloc de bas de page avec le tarif journalier et le nombre de like */
  let counter = 0
  for (const media of mediasFromUrl) {
    counter += media.likes
  }
  tariff.insertAdjacentHTML('afterbegin', `<div>
    <span id="tariff-likes">${counter}</span>
    <span><i class="fas fa-heart"></i></span>
  </div>
  <div><span id="tariff-price">${photographerFromUrl.price}</span>€/jour</div>`)

  /** Le carrousel / lightbox */
  class Lightbox {
    /** initialise la lightbox et greffe le comportement sur toutes les images quand on click ouvre la lightbox */
    static init () {
      const links = Array.from(document.querySelectorAll('.slideshow')) // liste des .slidesshow
      const gallery = links.map(link => link.getAttribute('src')) // recup tous les src des .slidesshow
      links.forEach(link => link.addEventListener('click', e => {
        e.preventDefault()
        // A l'appel de Lightbox.init() on initialise une nouvelle lightbox avec
        // en paramètre l'url (recup la src de la cible de l'event déclancheur de la lightbox c'est à dire l'image .slideshow
        // et les images ayant la class .slidesshow
        new Lightbox(e.currentTarget.getAttribute('src'), gallery)
      }))
    }

    /**
     * on construit le DOM a partir de l'url de l'image passé en parametre et des chemins des images (src) de la lightbox
     * @param {string} url Image actuellement affichée
     * @param {string[]} images Chemins des images de la lightbox
     */
    constructor (url, images) {
      this.element = this.buildDOM(url)
      this.images = images // [L'ensemble des images]
      this.loadImage(url) // charge l'image à mettre dans la lightbox
      this.onKeyUp = this.onKeyUp.bind(this) // on défini le this... par avance pour pas bind partout
      document.body.appendChild(this.element) // on ajoute la lightbox dans le html
      document.addEventListener('keyup', this.onKeyUp) // on ecoute le clavier
    }

    /**
     * méthode qui charge une image
     * @param {string} url URL de l'image
     */
    loadImage (url) {
      this.url = url
      const image = new Image()
      const container = this.element.querySelector('.lightbox__container')
      container.innerHTML = '' // pour que les images ne s'accumulent pas on clean container
      container.appendChild(image) // puis on ajoute l'image de l'url
      image.src = url // on donne en src de l'image l'url
    }

    /**
     * Gère la navigation au clavier
     * @param {string} e la touche dont on veut programmer l'execution
     */
    onKeyUp (e) {
      if (e.key === 'Escape') { // si la clé pressé est echap
        this.close(e)
      } else if (e.key === 'ArrowLeft') {
        this.prev(e)
      } else if (e.key === 'ArrowRight') {
        this.next(e)
      }
    }

    /**
     * Ferme le carrousel
     * @param {event} e un evenement de pointage (issu de la souris ou du clavier)
     */
    close (e) {
      e.preventDefault()
      this.element.classList.add('fadeOut')
      this.element.innerHTML = ''
      this.element.classList.remove('fadeOut', 'lightbox')
      document.removeEventListener('keyup', this.onKeyUp) // on supprime l'event
    }

    /**
     * Affiche l'image suivante
     * @param {event} e un evenement de pointage (issu de la souris ou du clavier)
     */
    next (e) {
      e.preventDefault()
      let i = this.images.findIndex(image => image === this.url) // recup la position de l'image actuel
      if (i === this.images.length - 1) { // si on est à la dernière image ...
        i = -1 // ... on revient à la valeur 0
      }
      this.loadImage(this.images[i + 1]) // on incrémente pour aller à la suivante
    }

    /**
     * Affiche l'image précédente
     * @param {event} e un evenement de pointage (issu de la souris ou du clavier)
     */
    prev (e) {
      e.preventDefault()
      let i = this.images.findIndex(image => image === this.url)
      if (i === 0) { // si on est à la 1er img
        i = this.images.length // i = la dernière image
      }
      this.loadImage(this.images[i - 1]) // on décrémente
    }

    /**
     * Injecte le carrousel dans le dom
     * @param {string} url le chemin d'accès / la src d'une image
     * @returns {html} retourne un élement html
     */
    buildDOM (url) {
      const dom = document.getElementById('lightbox--receptacle')
      dom.classList.add('lightbox')
      // nous allons construire la structure HTML de notre lightbox ...
      dom.innerHTML = `<button class="lightbox__close">fermer</button>
        <button class="lightbox__next">Suivant</button>
        <button class="lightbox__prev">Précédent</button>
        <div class="lightbox__container" aria-label=”image closeup view”></div>`
      // ... et greffer les différents comportements.
      dom.querySelector('.lightbox__close').addEventListener('click', this.close.bind(this))
      // On bind this pour que this à l'intérieur du close fasse reference à l'instance de lightbox
      // et non pas à l'élément sur lequel on vient de clicker
      dom.querySelector('.lightbox__next').addEventListener('click', this.next.bind(this))
      dom.querySelector('.lightbox__prev').addEventListener('click', this.prev.bind(this))
      return dom
    }
  }
  Lightbox.init()
}
