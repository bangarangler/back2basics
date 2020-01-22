const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalNoButton = document.querySelector(".modal__action--negative");
const selectPlanButtons = document.querySelectorAll(".plan button");
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const ctaButton = document.querySelector(".main-nav__item-cta");

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", () => {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    modal.classList.add('open')
    backdrop.style.display = 'block'
    setTimeout(function() {
      backdrop.classList.add('open')
    }, 10)
  })
}

const closeModal = () => {
  // backdrop.style.display = "none";
  // modal.style.display = "none";
  if (modal) {
    modal.classList.remove('open')
  }
  backdrop.classList.remove('open')
  setTimeout(function() {
    backdrop.style.display = 'none'
  }, 200)
}

backdrop.addEventListener("click", () => {
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove('open');
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

toggleButton.addEventListener('click', function() {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  mobileNav.classList.add('open')
  backdrop.style.display = 'block'
  setTimeout(function() {
    backdrop.classList.add('open')
  }, 10)
})

ctaButton.addEventListener('animationstart', function() {
  console.log('Animation started', event);
})

ctaButton.addEventListener('animationend', function() {
  console.log('Animation ended', event);
})

ctaButton.addEventListener('animationiteration', function() {
  console.log('Animation iteration', event);
})




