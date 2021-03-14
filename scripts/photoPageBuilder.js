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
  let title = document.querySelector('h1')
  let city = document.getElementById('city')
  let text = document.getElementById('text')
  let img = document.getElementById('img')
  let nameModal = document.getElementById('name-modal')
  let nav = document.getElementById('nav')

  // On injecte par innerHTML les elements simples à modofier (du texte)
  title.innerHTML = photographerFromUrl.name
  city.innerHTML = photographerFromUrl.name
  text.innerHTML = photographerFromUrl.tagline
  nameModal.innerHTML = photographerFromUrl.name

  // Afficher la photo de profil
  let nameWithSpaces = photographerFromUrl.name
  let words = nameWithSpaces.split(' ')
  let firstNameIs = words[0]
  let lastNameIs = words[1]
  let fullNameIs = firstNameIs + lastNameIs
  const photographersProfilRoot = '../public/img/SamplePhotos/PhotographersIdPhotos/'
  img.src = photographersProfilRoot + fullNameIs + '.jpg'

  // tags
  // On récupère les tags
  const tags = photographerFromUrl.tags
  for (tag of tags) {
    nav.insertAdjacentHTML('afterbegin', `<a href="#"><span class="link">#${tag}</span>`)
  }

  // diaporama
  console.log(mediasFromUrl)
  let imgSrcFolder = 'IL FAUT RECUP LE DOSSIER DES IMAGES'
  let imgSrc = 'genre dire que cest lindex, on boucle dessus'
  for (pic of pics) {
    nav.insertAdjacentHTML('afterbegin', `<figure>
    <a style="text-decoration: none; color: black;" href="#">
        <img src="../public/img/SamplePhotos/Ellie Rose/Architecture_Cross_Bar.jpg" alt="photo 1" id="photographerOne"/>
        <span id="divLibre"> C'est la </span>
    </a>
    <figcaption class="df fd-r jc-sb">
        <span class="pictures__title">Arc-en-ciel</span><br/>
        <span class="price">70€</span> 
        <span class="like"> <span class="counter">11</span><i class="fas fa-heart"></i></span>
    </figcaption>
</figure>`)
  }
}
