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

fetch('http://127.0.0.1:5500/datas.json')
// 1er promesse on recupere la reponse
  .then(res => {
    // S'il y a un soucis ...
    if (!res.ok) {
      throw new Error('HTTP error' + Response.status)
    }
    // Si tout va bien on jsonifie la réponse
    return res.json()
  }
  )
  // 2nd promesse
  .then(data => {
    console.log(data.photographers[0])
    const eulData = data.photographers[1]
    console.log(eulData)
    let maVariable = document.getElementById('divLibre');
    maVariable.innerText = eulData
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
fetch('http://127.0.0.1:5500/datas.json')
  .then(response => response.json())
  .then(data => console.log((data.photographers[0])))
*/
/*
fetch('http://127.0.0.1:5500/datas.json')
  .then(response => response.json())
  .then(data => console.log(data.photographers[1]))
*/

/*
function recup () {
  fetch('http://127.0.0.1:5500/datas.json')
    .then(response => response.json())
    .then(data => {
      maVariable.innerHTML = data.photographers[1]
    })
}
recup()
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

/*
let test = creatPhotographe(photographerOne)
console.log('HEY YO' + test + 'HEY')
*/
/*
let maVariable = document.getElementById('divLibre');
const getData = async function () {
  try {
    const response = await fetch('http://127.0.0.1:5500/datas.json')
    if (response.ok) {
      const data = response.json()
      console.log(data)
      maVariable.innerHTML = data
    } else {
      console.error('Le serveur indiuque : ', response.status)
    }
  } catch (e) {
    console.log(e)
  }
}
getData()
*/