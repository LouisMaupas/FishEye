// Toute la gestion des événements (par exemple, les clics et les pressions au clavier)
// doit être configurée (utilisez KeyboardEvent.key ou KeyboardEvent.code.).

// ESSAIE #1
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
})
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


/* ESSAIE #2 */
/*
const url = 'http://127.0.0.1:5500/datas.json'
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
  getSpecificData(data.media, data.photographers)
})

function getSpecificData (media, photographers, id) {
  const takenMedia = media
  const takenPhotographers = photographers
  getPhotographer(id, takenPhotographers)
  getMedia(id, takenMedia)
}

const getPhotographer = (id, photographers) => {
  return photographers.find(i => i.id === id)
}

const getMedia = (id, media) => {
  return media.find(i => i.id === id)
}

const getPicturesByPhotographer = (photographerId, pictures) => {
  return pictures.filter(i => i.photographerId === photographerId)
}
*/

/* EN POO */
/*
FishEye a des vidéos et des photos pour le photographe. C'est une bonne occasion pour utiliser le pattern Factory Method,
 comme moyen de simplifier la création du bon élément DOM dans le reste du code
*/

/* ESSAIE 1 */
 
class Factory {
  constructor () {
    this.createData = function (type) {
      let data
      if (type === 'photographer') data = new Photographer()
      else if (type === 'media') data = new Media()
      return data
    }
    this.id = id
  }

  // ON RECUP DATA
  getData (object) {
    const url = 'http://127.0.0.1:5500/datas.json'
    const response = fetch(url)
    const getData = response.then(res => {
      if (!res.ok) {
        throw new Error('HTTP error' + Response.status)
      }
      return res.json()
    }
    )
    getData.then(data => {
      getSpecificData(data.media, data.photographers)
    })
    if (object === 'media') {
      function getSpecificData (media, photographers) {
        const takenPhotographers = photographers
        getPhotographer(takenPhotographers)
      }
    } else {
      function getSpecificData (media, photographers) {
        const takenPhotographers = media
        getMedia(takenMedia)
      }
    }
  }

  //
  getPhotographer (id, photographers) {
    return photographers.find(i => i.id === id)
  }

  getMedia (id, media) {
    return media.find(i => i.id === id)
  }

  getPicturesByPhotographer (photographerId, pictures) {
    return pictures.filter(i => i.photographerId === photographerId)
  }
}



const factory = new Factory()
const mimi = factory.createData('photographer') // plutot que d'aller chercher photographer ou media autant aller chercher par id directement
console.log(mimi)

const test = factory.getData('media')
console.log(test)


/*
const mimi = new Photographer('name', 'id', 'city', 'country', 'tags', 'price', 'portrait', 'tagline')
console.log(mimi)
*/

// ESSAI 2
/*
class PhotographerFactory {

  constructor (url) {
    this.url = 'http://127.0.0.1:5500/datas.json'
    fetch(this.url).then(res => {
      if (!res.ok) {
        throw new Error('HTTP error' + Response.status)
      }
      res.json().then(data => {
        const datas = data.photgraphers
        console.log(datas)
      })
    }
    )
  }
  
  constructor () {
    const url = 'http://127.0.0.1:5500/datas.json'
    const response = fetch(url)
    const getData = response.then(res => {
      if (!res.ok) { // HTTP-status is not 200-299
        throw new Error('HTTP error' + Response.status)
      }
      return res.json()
    })
  }
  //
  getPhotographer () {
    return photographer.find(i => i.id === id)
  }

  getMedia (id) {
    let media
    return media.find(i => i.id === id)
  }

  getPicturesByPhotographer (photographerId, mediaId) {
    return pictures.filter(i => i.photographerId === photographerId)
  }

}

class Photographer {
  constructor (name, id, city, country, tags, price, portrait, tagline) {
    this.name = name
    this.id = id
    this.city = city
    this.country = country
    this.tags = tags
    this.price = price
    this.portrait = portrait
    this.tagline = tagline
  }
}
class Media {
  constructor (id, photographerId, image, tags, likes, date, price) {
    this.id = id
    this.photographerId = photographerId
    this.image = image
    this.tags = tags
    this.likes = likes
    this.date = date
    this.price = price
  }
}

const photographerFactory = new PhotographerFactory()
const mimi = photographerFactory.getPhotographer('243') // plutot que d'aller chercher photographer ou media autant aller chercher par id directement
console.log(mimi)

const test = factory.getData('media')
console.log(test)

/*
const mimi = new Photographer('name', 'id', 'city', 'country', 'tags', 'price', 'portrait', 'tagline')
console.log(mimi)
*/
