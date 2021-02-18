// permet de créer l'objet photographe
let datas = 'avant'

const data = function (param) {
  console.log(param)
  debugger
  return param
}

function getData () {
  const url = 'http://127.0.0.1:5500/datas.json'
  fetch(url).then(res => {
    if (!res.ok) {
      throw new Error('HTTP error' + Response.status)
    } else {
      res.json().then(data => {
        debugger
        console.log(data)
        console.log(data.media)
        data(data)
        debugger
      })
    }
  })
}
getData()

data()

/*
function createPhotographer() {
    return {
      id: id,

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
  */
