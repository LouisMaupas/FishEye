const photographers = []

// Factory.js

// MediaFactory ?
// PhotoFactory ?

const mimi = new Photographer(243)
photographers.push(mimi)

const ellie = new Photographer(930)
photographers.push(ellie)

// on distribue les images dans le dom à l'aide de (foreach) et renderHTML

/* ALTERNATIVE */

// DataHandler  : gère la récupération des données  que je récupère dans un objet {photographers: ..., media: ...}
// Je passe cet objet à mon HomePageBuilder pour qu'il s'en serve pour construire le HTML et les events
// HomePageBuilder : gère le rendu de la home page et ses événements