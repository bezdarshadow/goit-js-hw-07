import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const createGalleryItemEl = ({ preview, original, description } = {}) => {
    return `<a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>`
};

const getGalleryItemEl = galleryItems.map(el => {
    return createGalleryItemEl(el);
});

galleryEl.insertAdjacentHTML('afterBegin', getGalleryItemEl.join(''));

galleryEl.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
    }

  const instance = basicLightbox.create(`
  <img width="1400" height="900" src=${event.target.dataset.source}>
`)
  instance.show();

  window.addEventListener('keydown', event => {
    if(event.code === "Escape"){
      instance.close();
    }
  });
  
});


