let modal = null // par défaut modal est null cf 1er condition de closeModal
// tous les elements selectionnalbes dans la boite modal
const focusableSelector = 'button, a, input, textarea'
// on sotckera les elements focusables dans un tableau quand modal est ouvert
let focusables = []
// Pour enregistrer la ou était le focus avant d'ouvrir la modale
let previouslyFocusedElement = null

const openModal = function (e) {
  e.preventDefault()
  // element cible du lien
  modal = document.querySelector(e.currentTarget.getAttribute('href'))
  // sans "Array.from" ca renverrai une node liste
  focusables = Array.from(modal.querySelectorAll(focusableSelector))
  // on enregistre dans la var ou étais le focus avant de focus la boite modale
  previouslyFocusedElement = document.querySelector(':focus')
  // target.style.display = null //retire display:none donc flexbox prend relais
  modal.classList.remove('display-none')
  // par défaut le 1er element focusable est :
  focusables[0].focus()
  modal.removeAttribute('aria-hidden')
  // variante : target.setAttribute('aria-hidden', false)
  modal.setAttribute('aria-modal', 'true')
  modal.addEventListener('click', closeModal)
  modal.querySelector('.js-modal-close').addEventListener('click', closeModal)
  modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation)
}

// pas besoin du querySelector car on a deja la valeur de la cible dans la modal
const closeModal = function (e) {
  if (modal === null) return // si ferme un modal pas ouvert il se passe rien
  // si on avait enregistré un element  focus on lui redonne le focus
  if (previouslyFocusedElement !== null) previouslyFocusedElement.focus()
  e.preventDefault()
  modal.classList.add('display-none')
  modal.setAttribute('aria-hidden', 'true')
  modal.removeAttribute('aria-modal')
  modal.removeEventListener('click', closeModal)
  modal.querySelector('.js-modal-close').removeEventListener('click', closeModal)
  modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation)
  modal = null // on remet modal a null
}

// empeche la propagation de l'evenement vers les parents
// donc que le click au milieu de la fenetre modal la ferme
// on part du principe qu'on aura toujours qu'une div
// c'est js-modal-stop qui arrete la propagation
const stopPropagation = function (e) {
  e.stopPropagation()
}

// on court-circuite le comportement normal de tabulation
const focusInModal = function (e) {
  e.preventDefault()
  // on veut que quand on appuie sur tab on aille à l'element suivant
  // mais en partant de l'element acutellement focus =/= début de la page
  // trouver l'index de l'element actuellement focus
  let index = focusables.findIndex(f => f === modal.querySelector(':focus'))
  // on reparamètre tabulation
  // tout d'abord est qu'on appuye sur shit pour aller en sens inverse
  if (e.shiftKey === true) {
    // on recule d'un cran
    index--
  } else {
    // on ajoute un cran
    index++
  }
  // on vérifie si l'index dépasse les elements focusables => 0
  if (index >= focusables.length) {
    index = 0
  }
  // on vérifie que l'index recule pas derrière 0
  if (index < 0) {
    index = focusables.length - 1
  }
  // On applique le focus à l'element auquel on est.
  focusables[index].focus()
}

document.querySelectorAll('.modal-link').forEach(a => { // chaque lien
  a.addEventListener('click', openModal)
})

// echap pour fermer la boite modal
window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' || e.key === 'Esc') { // la touche échap selon navigateurs
    closeModal(e) // on passe en paramètre l'evenement
  }
  // on intercepte la pression sur tabulation
  if (e.key === 'Tab' && modal !== null) {
    focusInModal(e)
  }
})