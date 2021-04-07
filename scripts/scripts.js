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
      })
    }
  })
}
renderData()

function getDatas (data) {
  datas.push(data)
}
// TODO tag de la page photo = lien vers la page d'accueil avec les photographes ayant ce tag en commun
// => tags dans l'url via GET avec les noms de tag

// TODO Dropdown menu a faire
//      - css a faire

// TODO VERSION MOBILE
//  - Page photographe
//  - pagge contact + btn contactez moi sur la page modal contactr
//  - btn contactez moi bug

// TODO mise en page
//    contactez moi modal mise en page a faire
//    photo gallery bug
//    photo gallery espacement like et prix

// TODO NAMING DU JS et CSS plus propre => BEM 
// TODO séparer ficheirs JS faire des class ? => WEBPACK derniere video Grafiakrt
// TODO inclusvité ARIA ...
// TODO Mise en page / thumnaisl photograpeh index.html
// TODO commenter

// TODO MENTORAT : Check code propre