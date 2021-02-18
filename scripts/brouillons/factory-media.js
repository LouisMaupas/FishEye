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
