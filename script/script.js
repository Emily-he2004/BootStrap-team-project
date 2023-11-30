const btnClose = document.querySelector('.btn-close');
const video = document.getElementById('video');

btnClose.addEventListener('click', () => {
      video.pause();
});
