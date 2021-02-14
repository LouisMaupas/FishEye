// // dataHandler
// const url = 'http://127.0.0.1:5501/datas.json'
// const response = fetch(url)
// const MyPromiseOk = response.then(res => {
//   if (!res.ok) {
//     throw new Error('HTTP error' + Response.status)
//   }
//   return res.json()
// })
// const myPromiseResult = MyPromiseOk.then(data => {
//   const result = data
//   console.log(result)
// })

// console.log(myPromiseResult) // promesse

// class PhotographerFactory {
//   constructor (apiURL) {
//     this.apiURL = 'http://127.0.0.1:5501/datas.json'
//     fetch(this.apiURL).then(res => {
//       if (!res.ok) {
//         throw new Error('HTTP error' + Response.status)
//       }
//       res.json().then(data => {
//         this.data = data
//       })
//     }
//     )
//   }

//   getData () {
//     return this.data
//   }
// }

// console.log(PhotographerFactory.getData())

// Usine generale
function Factory (id) {
  this.createObject = function (id) {
    let object
    if (id > 10000) {
      object = new Media()
    } else if (id < 10000) {
      object = new Photographers()
    } else {
      console.log('erreur lors de la création de l\'objet')
      return alert('erreur lors de la création de l\'objet')
    }
    return object
  }
}

// usine du modele des photographes
class Photographers {
  constructor(id) {
    const url = 'http://127.0.0.1:5501/datas.json'
    const response = fetch(url)
    const MyPromiseOk = response.then(res => {
      if (!res.ok) {
        throw new Error('HTTP error' + Response.status)
      }
      return res.json()
    })
    const MyPromiseResult = MyPromiseOk.then(data => {
      const result = data
      // const findIt = 'data.photographers[' + myId + ']'
      console.log(result) // TODO LA CA MARCHE

      // this.data = findIt
      this.data = data.photographers[243]
      console.log(this.data) //TODO MAIS PAS LA : Undefined
    })
    this.retouneMonId = function (id) {
      console.log('mon id est ' + id)
    }
  }
}

// usine du modele des media
const Media = function () {
  this.data = 'vla les datas du media'
}

// stock de photographes
const tableau = []

// Usine de production
function run (id) {
  const factory = new Factory(id)
  tableau.push(factory.createObject(id))
  return tableau
}

const testMimi = 243
run(testMimi)
console.log(tableau)

// const testPhoto = 342550
// run(testPhoto)
// console.log()

// const mimi = new Photographers(243)
// console.log(mimi)

// voir request ???
// https://developer.mozilla.org/fr/docs/Web/API/Request
