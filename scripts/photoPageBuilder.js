function photoPagebuilder () {
  let photographerFromUrl
  let mediasFromUrl
  let urlSearch = new URLSearchParams(window.location.search)
  const index = parseInt(urlSearch.get('photo'))
  if(isNaN(index) || index < 0 || index > (photographers.length - 1)) {
    console.log('Ce photpgraphe n\'existe pas')
  } else {
    photographerFromUrl = photographers[index]
    mediasFromUrl = medias[index]
  }

  // CONSTRUCTION DE LA PAGE
  // On recuperer toutes les balises à modifier
  let title = document.querySelector('h1')
  let city = document.getElementById('city')
  let text = document.getElementById('text')
  let img = document.getElementById('img')
  let nameModal = document.getElementById('name-modal')

  // On injecte innerHTML
  title.innerHTML = photographerFromUrl.name
  city.innerHTML = photographerFromUrl.name
  text.innerHTML = photographerFromUrl.tagline
  nameModal.innerHTML = photographerFromUrl.name

  // MANIPULATION DES IMAGES :
  // TODO Pour la photo de profil
  let nameWithSpaces = photographerFromUrl.name
  let words = nameWithSpaces.split(' ')
  let firstNameIs = words[0]
  let lastNameIs = words[1]
  let fullNameIs = firstNameIs + lastNameIs

  const photographersProfilRoot = '../public/img/SamplePhotos/PhotographersIdPhotos/'
  img.src = photographersProfilRoot + fullNameIs + '.jpg'
  console.log(img.src)

  // Pour le diaporama
}

// PISTES
// trie les postes par title
// localeCompare
// écoute quel photographe est selectionné
// on recupere les bonnes données
// On génère les vignettes
//   const thumbnails = function () {
//     this.elHTML =
//         `<figure>
//             <a href="#">
//                 <img src="../public/img/SamplePhotos/Ellie Rose/Architecture_Cross_Bar.jpg" alt="photo 1" id="photographerOne"/>
//             </a>
//             <figcaption class="df fd-r jc-sb">
//                 <span class="pictures__title">Arc-en-ciel</span><br/>
//                 <span class="pictures__price">70€</span>
//                 <span class="like"> <span class="counter">11</span><i class="fas fa-heart"></i></span>
//             </figcaption>
//         </figure>`
//   }
