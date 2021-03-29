 // TODO fichier à part :  diaporama
 function diaporama (params) {
    for (let media of mediasFromTri) {
    console.log(mediasFromUrl)
    console.log(medias)
    letNumberOfLikes = media.likes
    console.log(letNumberOfLikes)
    if (media.image) {
      const searchRegExp = /.jpg|.mp4/g
      const replaceWith = ''
      const searchRegExpTwo = /_/g
      const replaceWithTwo = ' '
      let imageName = media.image.replace(searchRegExp, replaceWith)
      imageName = media.image.replace(searchRegExpTwo, replaceWithTwo)
      pictures.insertAdjacentHTML('afterbegin', `<figure>
      <a style="text-decoration: none; color: black;" href="#">
          <img class="slideshow" src="../public/img/SamplePhotos/${photographerFromUrl.name}/${media.image}" alt="Une photo"/>
      </a>
      <figcaption class="df fd-r jc-sb">
          <span class="pictures__title">${imageName}</span><br/>
          <span class="price">${media.price}€</span> 
          <span class="counter">${letNumberOfLikes}</span><span class="like"><i class="fas fa-heart"></i></span>
      </figcaption>
  </figure>`)
    } else if (media.video) {
      const searchRegExp = /.jpg|.mp4/g
      const replaceWith = ''
      const searchRegExpTwo = /_/g
      const replaceWithTwo = ' '
      let videoName = media.video.replace(searchRegExp, replaceWith)
      videoName = media.video.replace(searchRegExpTwo, replaceWithTwo)
      pictures.insertAdjacentHTML('afterbegin', `<figure>
      <a style="text-decoration: none; color: black;" href="#">
          <video src="../public/img/SamplePhotos/${photographerFromUrl.name}/${media.video}" controls poster="../public/img/play.svg" height="300" width="350">vidéo</video>
          <!-- <img class="slideshow" src="../public/img/play.svg" alt="Une photo"/> -->
      </a>
      <figcaption class="df fd-r jc-sb">
          <span class="pictures__title">${videoName}</span><br/>
          <span class="price">${media.price}€</span> 
          <span class="counter">${letNumberOfLikes}</span><span class="like"><i class="fas fa-heart"></i></span>
      </figcaption>
  </figure>`)
    }
  }
  } 