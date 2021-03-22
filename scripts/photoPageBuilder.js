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
  const text = document.getElementById('text')
  const img = document.getElementById('img')
  const nameModal = document.getElementById('name-modal')
  const nav = document.getElementById('nav')
  const pictures = document.getElementById('pictures')

  // On injecte par innerHTML les elements simples à modofier (du texte)
  title.innerHTML = photographerFromUrl.name
  city.innerHTML = photographerFromUrl.name
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
  // On récupère les tags
  const tags = photographerFromUrl.tags
  for (tag of tags) {
    nav.insertAdjacentHTML('afterbegin', `<a href="#"><span class="link">#${tag}</span>`)
  }

  // diaporama
  for (media of mediasFromUrl) {
    if (media.image) {
      const imageName = media.image.replace('_', '').toString()
      pictures.insertAdjacentHTML('afterbegin', `<figure>
      <a style="text-decoration: none; color: black;" href="#">
          <img class="slideshow" src="../public/img/SamplePhotos/${photographerFromUrl.name}/${media.image}" alt="Une photo"/>
      </a>
      <figcaption class="df fd-r jc-sb">
          <span class="pictures__title">${imageName}</span><br/>
          <span class="price">${media.price}€</span> 
          <span class="counter">${media.likes}</span><span class="like"><i class="fas fa-heart"></i></span>
      </figcaption>
  </figure>`)
    } else if (media.video) {
      const videoName = media.video.replace('_', ' ').toString()
      pictures.insertAdjacentHTML('afterbegin', `<figure>
      <a style="text-decoration: none; color: black;" href="#">
          <img class="slideshow" src="../public/img/play.svg" alt="Une photo"/>
      </a>
      <figcaption class="df fd-r jc-sb">
          <span class="pictures__title">${videoName}</span><br/>
          <span class="price">${media.price}€</span> 
          <span class="counter">${media.likes}</span><span class="like"><i class="fas fa-heart"></i></span>
      </figcaption>
  </figure>`)
    }
  }

  // Bouton like
  /*
  let likeBtn = document.querySelectorAll('.like')
  likeBtn.forEach((like) => like.addEventlistener('click', function () {
   // likeBtn.nexElementSibling ...
  }))
  */

  // CARROUSEl

  class Carousel {
    constructor (element, options = {}) {
      this.element = element
      // assign sert à fusionner la propriété options avec un objet qui contiens les optiosn par défaut ;
      // le 1er parametre est un objet vide qui obtiendra les propréités fusionné puis en 2eme les options par défaut et
      // et en 3eme parametre les options passés dans le constructor
      this.options = Object.assign({}, {
        slidesToScroll: 1,
        slidesVisible: 1,
        loop: false,
        pagination: false,
        navigation: true
      }, options)
      // pour convertir un nodelist en tableau on fait un tableau vide
      // [] avec la méthode slice et l'appeller en passant en param les elemetns
      const children = [].slice.call(element.children)
      this.isMobile = false
      this.currentItem = 0
      this.moveCallbacks = []

      // Modification du DOM
      this.root = this.createDivWithClass('carousel')
      this.container = this.createDivWithClass('carousel__container')
      this.root.setAttribute('tabindex', '0')
      this.root.appendChild(this.container)
      this.element.appendChild(this.root)
      // la fonction => permet que this fasse bien ref à la class (et non à l'élément)
      this.items = children.map((child) => {
      // pour l'ensemble des enfants on applique la méthode
        const item = this.createDivWithClass('carousel__item')
        item.appendChild(child)
        this.container.appendChild(item)
        return item
      })
      // à la fin de la méthode children.map on y ajoute setStyle
      // et de faire un create Navigation pour les fleche de navigation
      this.setStyle()
      if (this.options.navigation) {
        this.createNavigation()
      }
      if (this.options.pagination) {
        this.createPagination()
      }

      // Evenements
      this.moveCallbacks.forEach(cb => cb(0))
      this.onWindowResize()
      window.addEventListener('resize', this.onWindowResize.bind(this))
      this.root.addEventListener('keyup', e => {
        if (e.key === 'ArrowRight' || e.key === 'Right') {
          this.next()
        } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
          this.prev()
        }
      })
    }

    /**
   * Applique les bonnes dimensions aux éléments du carousel
   * Pour avoir le bon nombre d'items affichés à l'écran
   * On le mets dans une méthode pour que se soit + réutilisable
   * Par exemple pour gérer l'aspect responsiv
   */
    setStyle () {
      const ratio = this.items.length / this.slidesVisible
      this.container.style.width = (ratio * 100) + '%'
      this.items.forEach(item => item.style.width = ((100 / this.slidesVisible) / ratio) + '%')
    }

    /**
   * Crée les flêches de navigation dans le DOM
   */
    createNavigation () {
      const nextButton = this.createDivWithClass('carousel__next')
      const prevButton = this.createDivWithClass('carousel__prev')
      this.root.appendChild(nextButton)
      this.root.appendChild(prevButton)
      nextButton.addEventListener('click', this.next.bind(this))
      prevButton.addEventListener('click', this.prev.bind(this))
      if (this.options.loop === true) {
        return
      }
      this.onMove(index => {
        if (index === 0) {
          prevButton.classList.add('carousel__prev--hidden')
        } else {
          prevButton.classList.remove('carousel__prev--hidden')
        }
        if (this.items[this.currentItem + this.slidesVisible] === undefined) {
          nextButton.classList.add('carousel__next--hidden')
        } else {
          nextButton.classList.remove('carousel__next--hidden')
        }
      })
    }

    /**
   * Crée la pagination dans le DOM
   */
    createPagination () {
      const pagination = this.createDivWithClass('carousel__pagination')
      const buttons = []
      this.root.appendChild(pagination)
      for (let i = 0; i < this.items.length; i = i + this.options.slidesToScroll) {
        const button = this.createDivWithClass('carousel__pagination__button')
        button.addEventListener('click', () => this.gotoItem(i))
        pagination.appendChild(button)
        buttons.push(button)
      }
      this.onMove(index => {
        const activeButton = buttons[Math.floor(index / this.options.slidesToScroll)]
        if (activeButton) {
          buttons.forEach(button => button.classList.remove('carousel__pagination__button--active'))
          activeButton.classList.add('carousel__pagination__button--active')
        }
      })
    }

    /**
   *
   */
    next () {
      this.gotoItem(this.currentItem + this.slidesToScroll)
    }

    prev () {
      this.gotoItem(this.currentItem - this.slidesToScroll)
    }

    /**
   * Déplace le carousel vers l'élément ciblé
   * @param {number} index
   */
    gotoItem (index) {
      if (index < 0) {
        if (this.options.loop) {
          index = this.items.length - this.slidesVisible
        } else {
          return
        }
      } else if (index >= this.items.length || (this.items[this.currentItem + this.slidesVisible] === undefined && index > this.currentItem)) {
        if (this.options.loop) {
          index = 0
        } else {
          return
        }
      }
      // c'est ça qui permet de translate les slides
      // this.items.length = le nombre d'elements visibles
      const translateX = index * -100 / this.items.length
      // ex 100/5 = 20% ; donc pour aller au 2eme element faut un slide de 40%
      // donc 20% * index
      // - 100 est négatif pour que ça aille sur la gauche
      this.container.style.transform = 'translate3d(' + translateX + '%, 0, 0)'
      this.currentItem = index
      this.moveCallbacks.forEach(cb => cb(index))
    }

    /**
   * Rajoute un écouteur qui écoute le déplacement du carousel
   * @param {moveCallback} cb
   */
    onMove (cb) {
      this.moveCallbacks.push(cb)
    }

    /**
   * Ecouteur pour le redimensionnement de la fenêtre
   */
    onWindowResize () {
      const mobile = window.innerWidth < 800
      if (mobile !== this.isMobile) {
        this.isMobile = mobile
        this.setStyle()
        this.moveCallbacks.forEach(cb => cb(this.currentItem))
      }
    }

    /**
   * Helper pour créer une div avec une classe
   * @param {string} className
   * @returns {HTMLElement}
   */
    createDivWithClass (className) {
      const div = document.createElement('div')
      div.setAttribute('class', className)
      return div
    }

    /**
   * @returns {number}
   */
    get slidesToScroll () {
      return this.isMobile ? 1 : this.options.slidesToScroll
    }

    /**
   * @returns {number}
   */
    get slidesVisible () {
      return this.isMobile ? 1 : this.options.slidesVisible
    }
  }

  const onReady = function () {
    new Carousel(document.querySelector('#carousel1'), {
      slidesVisible: 3,
      slidesToScroll: 2,
      loop: true
    })

    new Carousel(document.querySelector('#carousel2'), {
      slidesVisible: 2,
      slidesToScroll: 2,
      pagination: true,
      loop: true
    })

    new Carousel(document.querySelector('#carousel3'))
  }

  if (document.readyState !== 'loading') {
    onReady()
  }
  // Pour attendre que le DOM soit chargé :
  document.addEventListener('DOMContentLoaded', onReady)
}
