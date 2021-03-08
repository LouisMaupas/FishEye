// les photographes avec ID
let mimi = 243
let ellie = 930
let tracy = 82
let nabeel = 527
let rhode = 925
let marcel = 195

// les tableaux
let datas = []
let photographers = []
let medias = []
let mimiDatas

// URL
const url = 'http://127.0.0.1:5501/'
const urlJson = new URL('/datas.json', url)

// recup les datas du fichier JSON et quand la promesse est résolu y rend par une fonction
function renderData () {
  // const urlJson = 'http://127.0.0.1:5501//datas.json'
  fetch(urlJson).then(res => {
    if (!res.ok) {
      throw new Error('HTTP error' + Response.status)
    } else {
      res.json().then(data => {
        getDatas(data)
        photographer()
        media()
        homePagebuilder()
        photoPagebuilder()
        console.log(photographers)
      })
    }
  })
}
renderData()

function getDatas (data) {
  datas.push(data)
}
