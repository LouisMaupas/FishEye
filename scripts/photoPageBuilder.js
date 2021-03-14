function photoPagebuilder () {
  let photographerFromUrl
  let mediasFromUrl
  const urlSearch = new URLSearchParams(window.location.search)
  const index = parseInt(urlSearch.get('photo'))
  if (isNaN(index) || index < 0 || index > (photographers.length - 1)) {
    console.log('Ce photpgraphe n\'existe pas')
  } else {
    console.log(photographers)
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
}
