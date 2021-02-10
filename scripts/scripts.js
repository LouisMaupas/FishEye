const url = 'http://127.0.0.1:5500/datas.json'
// on fait une requete
const response = fetch(url)
// on recupere la reponse et la retourne au format JSON
const MyPromiseOk = response.then(res => {
  // S'il y a un soucis ...
  if (!res.ok) { // HTTP-status is not 200-299
    throw new Error('HTTP error' + Response.status)
  }
  // Si tout va bien on parse en JSON la réponse contenu dans le body
  return res.json()
}
)
// chainage : 2nd promesse sur la 1er promesse jsonifié qu'on stock dans "MyPromiseResult"
const MyPromiseResult = MyPromiseOk.then(data => {
  const result = data
  console.log(result)
  const media = data.media
  console.log(media)
  const photographers = data.photographers
  console.log(photographers)
  const photographerZero = data.photographers[0]
  console.log(photographerZero)
  const city = photographerZero.city
  console.log(city)
  const country = photographerZero.country
  const id = photographerZero.id
  const name = photographerZero.name
  const portrait = photographerZero.portrait
  const price = photographerZero.price
  const tagline = photographerZero.tagline
  const tags = photographerZero.tags
  const maVariable = document.getElementById('divLibre')
  maVariable.innerText = JSON.stringify(photographerZero) + 'Et la ville est ' + city
}
)
  // si la promesse est rejetée
  .catch(function () {
    this.dataError = true
  }
  )

console.log(MyPromiseResult)

const photographers = MyPromiseOk.then(data => {
  return data.photographers
})

console.log(photographers)