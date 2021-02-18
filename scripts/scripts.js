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

// recup les datas du fichier JSON et quand la promesse est résolu y rend par une fonction
function renderData () {
  const url = 'http://127.0.0.1:5501/datas.json'
  fetch(url).then(res => {
    if (!res.ok) {
      throw new Error('HTTP error' + Response.status)
    } else {
      res.json().then(data => {
        getDatas(data)
        photographer()
        media()
        homePagebuilder()
      })
    }
  })
}
renderData()

function getDatas (data) {
  datas.push(data)
}
