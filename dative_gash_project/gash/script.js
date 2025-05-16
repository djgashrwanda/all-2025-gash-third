const modal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const closeModal = document.querySelector('.close-btn');
const trailerButtons = document.querySelectorAll('.trailer-btn');

trailerButtons.forEach(button => {
  button.addEventListener('click', function() {
    const videoSrc = this.getAttribute('data-video');
    modalVideo.src = videoSrc;
    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  modalVideo.src = '';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    modalVideo.src = '';
  }
});
