  // TODO Tarif
function tarif() {
    console.log('salut je suis tarif')
    const tariff = document.getElementById('tariff')
    let counter = 0
    for (const media of mediasFromUrl) {
      counter += media.likes
    }
    tariff.insertAdjacentHTML('afterbegin', `<span id="tariff-likes">${counter}</span>
    <span><i class="fas fa-heart"></i></span>
    <span id="tariff-price">${photographerFromUrl.price}</span>€/jour`)
}

