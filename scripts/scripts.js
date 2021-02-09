// Toute la gestion des événements (par exemple, les clics et les pressions au clavier)
// doit être configurée (utilisez KeyboardEvent.key ou KeyboardEvent.code.).

/* ESSAIE #1
const url = 'http://127.0.0.1:5500/datas.json'
// on fait une requete
const response = fetch(url)
// on recupere la reponse et la retourne au format JSON
const MyPromiseOk = response.then(res => {
  // S'il y a un soucis ...
  if (!res.ok) { // HTTP-status is not 200-299
    throw new Error('HTTP error' + Response.status)
  }
  // Si tout va bien on parse en JSON la réponse contenu dans le body
  return res.json()
}
)
// chainage : 2nd promesse sur la 1er promesse jsonifié qu'on stock dans "MyPromiseResult"

const MyPromiseResult = MyPromiseOk.then(data => {
  const result = data
  console.log(result)
  const media = data.media
  console.log(media)
  const photographers = data.photographers
  console.log(photographers)
  const photographerZero = data.photographers[0]
  console.log(photographerZero)
  const city = photographerZero.city
  console.log(city)
  const country = photographerZero.country
  const id = photographerZero.id
  const name = photographerZero.name
  const portrait = photographerZero.portrait
  const price = photographerZero.price
  const tagline = photographerZero.tagline
  const tags = photographerZero.tags
  const maVariable = document.getElementById('divLibre')
  maVariable.innerText = JSON.stringify(photographerZero) + 'Et la ville est ' + city
}
)
  // si la promesse est rejetée
  .catch(function () {
    this.dataError = true
  }
  )

console.log(MyPromiseResult)

const photographers = MyPromiseOk.then(data => {
  return data.photographers
})

const getPhotographer(id) {
  return photographers.find(i => i.id === id); 
}
console.log(photographers)
*/

/* ESSAIE #2 */
const url = 'http://127.0.0.1:5500/datas.json'
let photographers, media;
// on fait une requete
const response = fetch(url)
// on recupere la reponse et la retourne au format JSON
const getData = response.then(res => {
  // S'il y a un soucis ...
  if (!res.ok) { // HTTP-status is not 200-299
    throw new Error('HTTP error' + Response.status)
  }
  // Si tout va bien on parse en JSON la réponse contenu dans le body
  return res.json()
}
)

getData.then(data => {
  /* photographers = data.photographers
  media = data.media */
  faireDesTrucs(data.media, data.photographers)
})

const getPhotographer = (id, photographers) => {
  return photographers.find(i => i.id === id)
}

const getPicturesByPhotographer = (photographerId, pictures) => {
  return pictures.filter(i => i.photographerId === photographerId);
}

function faireDesTrucs(media, photographers) {
  
}

/*
function creatPhotographe (name, id, city, country, tags, price, portrait, tagline) {
  const objet = {}
  objet.name = name
  objet.id = id
  objet.city = city
  objet.country = country
  objet.tags = tags
  objet.price = price
  objet.portrait = portrait
  objet.tagline = tagline
  return objet
}
*/
