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
const Photographers = function (id) {
  let myId = id
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
    console.log(result)
    // this.data = findIt
    this.data = data.photographers[243]
    console.log(this.data)
  })
}

// usine du modele des media
const Media = function () {
  this.data = 'vla les datas du media'
}

// stock de photographes
const tableau = []

// Usine de production
function run (id) {
  const monId = id
  const factory = new Factory()
  tableau.push(factory.createObject(monId))
  return tableau
}

const mimi = 'media'
run(mimi)
console.log(tableau)

const photo = 'photographer'
run(photo)
console.log()

const test = new Photographers(243)
console.log(test)
