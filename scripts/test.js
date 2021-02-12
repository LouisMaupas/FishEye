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
function Factory () {
  this.createObject = function (type) {
    let object
    if (type === 'media') {
      object = new Media()
    } else if (type === 'photographer') {
      object = new Photographers()
    } else {
      return alert('erreur lors de la création de l\'objet')
    }
    return object
  }
}

// usine du modele des photographes
const Photographer = function (id) {
  let myPhotographerIs = id
  this.data = 'data.photographer[myPhotographerIs]'
}

// usine du modele des media
const Media = function () {
  this.data = 'vla les datas du media'
}

// stock de photographes
const photographers = []

// Usine de production
function run (id) {
  const monId = id
  const factory = new Factory()
  photographers.push(factory.createObject(monId))
  return photographers
}

const mimi = 'media'
run(mimi)
console.log(photographers)
