// Usine generale
class Factory {
  constructor (id, type) {
    this.createObject = function (id) {
      let object
      if (type === 'media') {
        object = new Media(id)
      } else if (type === 'photographers') {
        object = new Photographers(id)
      } else {
        console.log('erreur lors de la création de l\'objet')
      }
      return object
    }
  }
}

// usine du modele des photographes
class Photographers {
  constructor (id) {
    const url = 'http://127.0.0.1:5501/datas.json'
    const response = fetch(url)
    const MyPromiseOk = response.then(res => {
      if (!res.ok) {
        throw new Error('HTTP error' + Response.status)
      }
      return res.json()
    })
    const MyPromiseResult = MyPromiseOk.then(data => {
      this.data = data.photographers[id]
    })
  }
}

// usine du modele des media
class Media {
  constructor (id) {
    const url = 'http://127.0.0.1:5501/datas.json'
    const response = fetch(url)
    const MyPromiseOk = response.then(res => {
      if (!res.ok) {
        throw new Error('HTTP error' + Response.status)
      }
      return res.json()
    })
    const MyPromiseResult = MyPromiseOk.then(data => {
      this.data = data.media[id]
    })
  }
}

// stock de photographes et des photos
const tableauPhotographes = []
const tableauMedia = []

// créateur de photographes
function runPhotographer (id) {
  const factory = new Factory(id, 'photographers')
  tableauPhotographes.push(factory.createObject(id, 'photographers'))
  return tableauPhotographes
}

// créateur de media
function runMedia (id) {
  const factory = new Factory(id, 'media')
  tableauMedia.push(factory.createObject(id, 'media'))
  return tableauMedia
}

// les photographes
const mimi = 0
const ellie = 1
const tracy = 2
const nabeel = 3
const rhode = 4
const marcel = 5

// création des photographes
runPhotographer(mimi)
runPhotographer(ellie)
runPhotographer(tracy)
runPhotographer(nabeel)
runPhotographer(rhode)
runPhotographer(marcel)

console.log(tableauPhotographes)

// les medias
const one = 0
const two = 1
// [...]
const sixty = 50

// création des medias
runMedia(one)
runMedia(two)
runMedia(sixty)

console.log(tableauMedia)


// voir request ???
// https://developer.mozilla.org/fr/docs/Web/API/Request

// pour assigner automatiquement
// const nonAssingedphoto = {
//   mimi: 0,
//   ellie: 1,
//   tracy: 2,
//   nabeel: 3,
//   rhode: 4,
//   marcel: 5
// }

// let runAllPhotographers = function (a) {
//   // for (let i; i <= a.length; i++) {
//   //   a[i].push(tableauPhotographes)
//   // }
//   for (let key in a) {
//     let value = a[key]
//     console.log(key)
//   }
// }
// runAllPhotographers(nonAssingedphoto)