// TABLEAU
const photographers = []

const getPhotographer = function (id) {
  return this.data.find(i => i.id === id)
}

const newPhotographer = function (id, name) {
  if (this.getPhotographer(id)) {
    return
    // erreur car il existe déja
  }
  const photographer = new Photographer(id, name)
  this.data.push(photographers)
  //return photographers
}

// Factory.js
class Factory {
  constructor (id) {
    this.url = 'http://127.0.0.1:5500/datas.json'
    this.id = id
    fetch(this.url).then(res => {
      if (!res.ok) {
        throw new Error('HTTP error' + Response.status)
      } else {
        res.json().then(data => {
          const datas = data
          getPhotographer(id)
        })
      }
    })
  }
}

let test = new Factory(243)

// CREATION DES PHOTOGRAPHES ET INSERTION DANS LE TABLEAU
/*
const mimi = new Photographer(243)
photographers.push(mimi)

const ellie = new Photographer(930)
photographers.push(ellie)
*/
