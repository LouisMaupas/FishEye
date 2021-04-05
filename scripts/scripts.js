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

// TODO Dropdown menu a faire
//      - Le menu doit être composé de 3 elements
//      - css a faire

// TODO BUG QUAND ON TRIE :
//      - On ne peut plus afficher la lightbox
//      - On en peux plus liker
//      - Ne trie pas les vidéo (if img alors nom = media.img sinon media.video PUIS trie)

// TODO VERSION MOBILE
//  - Page photographe
//  - fenetre lightbox
//  - pagge contact

// TODO tag de la page photo = lien vers la page d'accueil avec les photographes ayant ce tag en commun


// TODO  JS et CSS plus propre => BEM 
// TODO séparer ficheirs JS faire des class ? => WEBPACK derniere video Grafiakrt
// TODO inclusvité ARIA ...
// TODO Mise en page / thumnaisl photograpeh index.html
// TODO commenter  
