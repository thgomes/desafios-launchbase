const modalOverlay = document.querySelector('.modal-overlay')
const courseCards = document.querySelectorAll('.course-card')

for (let courseCard of courseCards) {
  courseCard.addEventListener('click', function() {
    const courseId = courseCard.getAttribute('id');
    modalOverlay.classList.add('active')
    modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${courseId}`
  })
}

document.querySelector('.close-modal').addEventListener('click', function() {
  modalOverlay.classList.remove('active')
  modalOverlay.querySelector('iframe').src = ""
})