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

// stock de photographes et des photos
const tableauPhotographes = []
const tableauMedia = []

let datas
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
      datas = data
      //  ici fonction qui se déclanche que quand promesse recu et c'est elle qui traitera les données
      // ET FAUDRAIT RECUP QU'UNE SEULE FOIS LES DATAS
    })
  }
}
console.log()

// créateur de photographes
function runPhotographer (id) {
  const factory = new Factory(id, 'photographers')
  tableauPhotographes.push(factory.createObject(id, 'photographers'))
  console.log('test')
  return tableauPhotographes
}

// les photographes avant recup datas
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
console.log(tableauPhotographes[0])
setTimeout(() => {
  console.log(tableauPhotographes[0].data)
}, 1000)

// console.log(tableauPhotographes[0].data.name) // expected "Mimi Keel"

// for (const key in tableauPhotographes) {
//   console.log(key + ' => ' + tableauPhotographes[key]);
// }

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

// atelier des media
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

// créateur de media
function runMedia (id) {
  const factory = new Factory(id, 'media')
  tableauMedia.push(factory.createObject(id, 'media'))
  return tableauMedia
}

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
