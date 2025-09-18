import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryItem = document.querySelector('.gallery');
const loaderItem = document.getElementById('loader');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  if (!Array.isArray(images) || images.length === 0) return;
  const markup = images.map(img => {
    const {
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    } = img;
    return `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${likes}</p>
          <p class="info-item"><b>Views:</b> ${views}</p>
          <p class="info-item"><b>Comments:</b> ${comments}</p>
          <p class="info-item"><b>Downloads:</b> ${downloads}</p>
        </div>
      </li>
    `;
  }).join('');

  galleryItem.innerHTML = markup;
  lightbox.refresh();
}

export function clearGallery() {
  galleryItem.innerHTML = '';
}

export function showLoader() {
  if (!loaderItem) return;
  loaderItem.classList.remove('visually-hidden');
  loaderItem.classList.add('is-loading');
}

export function hideLoader() {
  if (!loaderItem) return;
  loaderItem.classList.add('visually-hidden');
  loaderItem.classList.remove('is-loading');
}
