// Add imports above this line
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const parentDiv = document.querySelector('.gallery');
console.log(galleryItems);
const galleryMap = galleryItems.map(item => `  <div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
).join("");
console.log(galleryMap);
parentDiv.insertAdjacentHTML('beforeend', galleryMap);

var lightbox = new SimpleLightbox('.gallery a', {
captionsData: 'alt',
    captionDelay: 250,
});