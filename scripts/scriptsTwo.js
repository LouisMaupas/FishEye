



















class PhotographerFactory {
    constructor (apiURL) {
      this.apiURL = 'apiURL'
      fetch(this.apiURL).then(res => {
        if (!res.ok) {
          throw new Error('HTTP error' + Response.status)
        }
        res.json().then(data => {
          this.data = data.photgraphers
        })
      }
      )
    }
    //
    class Photographer {
      constructor (name, id, city, country, tags, price, portrait, tagline) {
        this.name = name
        this.id = id
        this.city = city
        this.country = country
        this.tags = tags
        this.price = price
        this.portrait = portrait
        this.tagline = tagline
      }
    }
    //
    getPhotographer (id) {
      return this.data.find(i => i.id === id)
    }
  
    newPhotographer (name, id, city, country, tags, price, portrait, tagline) {
      if (this.getPhotographer(id)) {
        return alert('exist deja')
      }
      const photographer = new Photographer(name, id, city, country, tags, price, portrait, tagline)
      this.data.push(photographer)
      return photographer
    }
  
    /**
       * A foutre dans la MediaFactory
       * @param photographerId:string identifiant BDD
       * @param pictures:array<Picture> liste des medias
       * @return {*}
    
    getPicturesByPhotographer (photographerId, pictures) {
      return pictures.filter(i => i.photographerId === photographerId)
    }
  }
*/
/*
  class PhotographerFactory {
    constructor (apiURL) {
      this.apiURL = 'apiURL'
      fetch(this.apiURL).then(res => {
        if (!res.ok) {
          throw new Error('HTTP error' + Response.status)
        }
        res.json().then(data => {
          this.data = data.photgraphers
        })
      }
      )
    }
    //
    class Photographer {
      constructor (name, id, city, country, tags, price, portrait, tagline) {
        this.name = name
        this.id = id
        this.city = city
        this.country = country
        this.tags = tags
        this.price = price
        this.portrait = portrait
        this.tagline = tagline
      }
    }
    //
    getPhotographer (id) {
      return this.data.find(i => i.id === id)
    }
  
    newPhotographer (name, id, city, country, tags, price, portrait, tagline) {
      if (this.getPhotographer(id)) {
        return alert('exist deja')
      }
      const photographer = new Photographer(name, id, city, country, tags, price, portrait, tagline)
      this.data.push(photographer)
      return photographer
    }

    /**
       * A foutre dans la MediaFactory
       * @param photographerId:string identifiant BDD
       * @param pictures:array<Picture> liste des medias
       * @return {*}

    getPicturesByPhotographer (photographerId, pictures) {
      return pictures.filter(i => i.photographerId === photographerId)
    }
  }
    const photographerFactory = new PhotographerFactory('http://127.0.0.1:5500/datas.json')
  console.log(photographerFactory)
*/
