function photoPagebuilder () {
  let photographerFromUrl
  let mediasFromUrl
  const urlSearch = new URLSearchParams(window.location.search)
  const index = parseInt(urlSearch.get('photo'))
  if (isNaN(index) || index < 0 || index > (photographers.length - 1)) {
    console.log('Ce photpgraphe n\'existe pas')
  } else {
    photographerFromUrl = photographers[index]
    mediasFromUrl = medias[index]
  }

  // CONSTRUCTION DE LA PAGE
  // On recuperer toutes les balises à modifier
  const title = document.querySelector('h1')
  const city = document.getElementById('city')
  const country = document.getElementById('country')
  const text = document.getElementById('text')
  const img = document.getElementById('img')
  const nameModal = document.getElementById('name-modal')
  const nav = document.getElementById('nav')
  const pictures = document.getElementById('pictures')

  // On injecte par innerHTML les elements simples à modofier (du texte)
  title.innerHTML = photographerFromUrl.name
  city.innerHTML = photographerFromUrl.city + ','
  country.innerHTML = photographerFromUrl.country
  text.innerHTML = photographerFromUrl.tagline
  nameModal.innerHTML = photographerFromUrl.name

  // Afficher la photo de profil
  const nameWithSpaces = photographerFromUrl.name
  const words = nameWithSpaces.split(' ')
  const firstNameIs = words[0]
  const lastNameIs = words[1]
  const fullNameIs = firstNameIs + lastNameIs
  const photographersProfilRoot = '../public/img/SamplePhotos/PhotographersIdPhotos/'
  img.src = photographersProfilRoot + fullNameIs + '.jpg'

  // tags
  const tags = photographerFromUrl.tags
  for (const tag of tags) {
    nav.insertAdjacentHTML('afterbegin', `<a href="${url}"><span class="link">#${tag}</span>`)
  }
  diaporama()

  // TODO FICHIER A PART LE RESTE

  // TODO fichier a part Menu Tri des photos
  // Le systm de spoiler pour afficehr le menu de tri
  const dropdown = document.getElementById('dropdown-btn')
  const dropPopularity = document.getElementById('popularity')
  const dropTitle = document.getElementById('title')
  const dropDate = document.getElementById('date')
  const dropdownContent = document.getElementById('dropdown')
  const changeMyMenuName = document.getElementById('change-menu-name')
  dropdown.addEventListener('click', function () {
    dropdownContent.classList.toggle('show')
  })
  const changeMyMenu = function (name) {
    changeMyMenuName.innerHTML = name
  }

  // Le systm de tri
  function compareFunction (property) {
    return function (a, b) {
      if (property === 'title') {
        // if (mediasFromUrl.hasOwnProperty('image'))
      }
      if (property === 'date') {
        return new Date(a.date) < new Date(b.date) ? -1 : Date(a.date) > new Date(b.date) ? 1 : 0
      }
      const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0
      return result
    }
  }
  dropDate.addEventListener('click', function (e) {
    e.preventDefault()
    changeMyMenu('Date')
    mediasFromUrl.sort(compareFunction('date'))
    diaporama()
    Lightbox.init()
    Like.init()
  })
  dropTitle.addEventListener('click', function (e) {
    e.preventDefault()
    changeMyMenu('Titre')
    mediasFromUrl.sort(compareFunction('title'))
    diaporama()
    Lightbox.init()
    Like.init()
  })
  dropPopularity.addEventListener('click', function (e) {
    e.preventDefault()
    changeMyMenu('Popularité')
    mediasFromUrl.sort(compareFunction('likes'))
    diaporama()
    Lightbox.init()
    Like.init()
  })

  // TODO Bouton like
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

  // TODO fichier à part :  diaporama
  function diaporama () {
    pictures.innerHTML = ''
    for (const media of mediasFromUrl) {
      const NumberOfLikes = media.likes
      if (media.image) {
        const searchRegExp = /.jpg|.mp4/g
        const replaceWith = ''
        const searchRegExpTwo = /_/g
        const replaceWithTwo = ' '
        let imageName = media.image.replace(searchRegExp, replaceWith).replace(searchRegExpTwo, replaceWithTwo)
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
        let videoName = media.video.replace(searchRegExp, replaceWith).replace(searchRegExpTwo, replaceWithTwo)
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

  // TODO Tarif
  // tarif()
  const tariff = document.getElementById('tariff')
  let counter = 0
  for (const media of mediasFromUrl) {
    counter += media.likes
  }
  tariff.insertAdjacentHTML('afterbegin', `<span id="tariff-likes">${counter}</span>
  <span><i class="fas fa-heart"></i></span>
  <span id="tariff-price">${photographerFromUrl.price}</span>€/jour`)

  // TODO fichier à part
  // CARROUSEl
  class Lightbox {
    // initialise la lightbox et greffe le comportement sur toutes les images
    // quand on click ouvre la lightbox
    static init () {
      const links = Array.from(document.querySelectorAll('.slideshow')) // liste des .slidesshow
      const gallery = links.map(link => link.getAttribute('src')) // recup tous les src des .slidesshow
      links.forEach(link => link.addEventListener('click', e => {
        e.preventDefault()
        // initialise nouvelle lightbox
        // On recup la src de la cible de l'event déclancheur de la lightbox c a dir l'img .slideshow
        new Lightbox(e.currentTarget.getAttribute('src'), gallery) // et pour chaque image on crée un lightbox
      }))
    }

    constructor (url, images) {
      // on construit le DOM a partir de l'url de l'image passé en parametre
      // et des chemins des images de la lightbox
      this.element = this.buildDOM(url)
      this.images = images // o nstock le 2nd parametre
      this.loadImage(url) // charge l'image à mettre dans la lightbox
      this.onKeyUp = this.onKeyUp.bind(this) // on défini le this... par avance pour pas bind partout
      document.body.appendChild(this.element) // on ajoute la lightbox dans le html
      document.addEventListener('keyup', this.onKeyUp) // on ecoute le clavier
    }

    // méthode qui injecte le loader, charge une image et qd l'img est chargé enlève le loader
    loadImage (url) {
      this.url = url
      const image = new Image() // on crée une image
      const container = this.element.querySelector('.lightbox__container')
      container.innerHTML = '' // pour que les images ne s'accumulent pas on clean container
      container.appendChild(image) // puis on ajoute l'image de l'url
      image.src = url // on donne en src de l'image l'url
    }

    // Navigation clavier
    onKeyUp (e) {
      if (e.key === 'Escape') { // si la clé pressé est echap
        this.close(e)
      } else if (e.key === 'ArrowLeft') {
        this.prev(e)
      } else if (e.key === 'ArrowRight') {
        this.next(e)
      }
    }

    // ferme carrousel
    close (e) { // prend un event (souris ou clavier) en param
      e.preventDefault()
      this.element.classList.add('fadeOut')
      window.setTimeout(() => {
        // this.element.remove() // this.element.parentElement.removeChild(this.element)
        this.element.innerHTML = ''
        this.element.classList.remove('fadeOut', 'lightbox')
      }, 500)
      document.removeEventListener('keyup', this.onKeyUp) // on supprime l'event
    }

    // Image suivante
    next (e) { // prend un event (souris ou clavier) en param
      e.preventDefault()
      let i = this.images.findIndex(image => image === this.url) // recup la position de l'image actuel
      if (i === this.images.length - 1) { // si on est à la dernière image ...
        i = -1 // ... on revient à la valeur 0
      }
      this.loadImage(this.images[i + 1]) // on incrémente pour aller à la suivante
    }

    // image précédente
    prev (e) { // prend un event (souris ou clavier) en param
      e.preventDefault()
      let i = this.images.findIndex(image => image === this.url)
      if (i === 0) { // si on est à la 1er img
        i = this.images.length // i = la dernière image
      }
      this.loadImage(this.images[i - 1]) // on décrémente
    }

    // Injecte le HTML
    // recup en entrée la src d'image et retoune un element html
    // Lors du clic nous allons construire la structure HTML de notre lightbox
    // et greffer les différents comportements.
    buildDOM (url) {
      const dom = document.getElementById('lightbox--receptacle')
      dom.classList.add('lightbox')
      dom.innerHTML = `<button class="lightbox__close"></button>
        <button class="lightbox__next">Suivant</button>
        <button class="lightbox__prev">Précédent</button>
        <div class="lightbox__container"></div>`
      dom.querySelector('.lightbox__close').addEventListener('click', this.close.bind(this))
      // On bind this pour que this à l'intérieur du close fasse reference à l'instance de lightbox
      // et non pas à l'élément sur lequel on vient de clicker
      dom.querySelector('.lightbox__next').addEventListener('click', this.next.bind(this))
      dom.querySelector('.lightbox__prev').addEventListener('click', this.prev.bind(this))
      return dom
    }
    // initialise une new lightbox
  } Lightbox.init()
}
