// Toute la gestion des événements (par exemple, les clics et les pressions au clavier)
// doit être configurée (utilisez KeyboardEvent.key ou KeyboardEvent.code.).

/*
const portrait = document.getElementById('portrait')
const articleOne = document.getElementById('article-one')
const tags = ['portrait', 'art', 'fashion', 'architecture', 'travel', 'sport', 'animals', 'events']
const thubOne = ['portrait', 'travel', 'animals', 'events']
const thubTwo = ['sport', 'architecture']
const thubThree = ['art', 'fashion', 'events']
const thubFour = ['portrait', 'travel']
const thubFive = ['fashion', 'sport', 'animals', 'events']
const thubSix = ['architecture', 'events'],
    art = document.getElementById('art'),
    fashion = document.getElementById("fashion"),
    architecture = document.getElementById("architecture"),
    travel = document.getElementById("travel"),
    sport = document.getElementById("sport"),
    animals = document.getElementById("animals"),
    events = document.getElementById("events"),
    articleOne = document.getElementById("article-one"),
    articleTwo = document.getElementById("article-two");

portrait.addEventListener('click', function () {
  articleOne.style.display = 'none'
  portrait.style.backgroundColor = "red"
})
*/

// on fait une requete
const myPromise = fetch('http://127.0.0.1:5500/datas.json')
// on recupere la reponse et la retourne au format JSON
const MyPromiseOk = myPromise.then(res => {
  // S'il y a un soucis ...
  if (!res.ok) { // HTTP-status is not 200-299
    throw new Error('HTTP error' + Response.status)
  }
  // Si tout va bien on parse la réponse
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

// const photographerOne = {}
// let maVariable = document.getElementById('divLibre');
/*
const photographerTwo
let photographerThree
let photographerFour
let photographerFive
let photographerSix
*/

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
