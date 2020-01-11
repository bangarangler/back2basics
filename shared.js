const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalNoButton = document.querySelector(".modal__action--negative");
const selectPlanButtons = document.querySelectorAll(".plan button");

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", () => {
    modal.style.display = "block";
    backdrop.style.display = "block";
  })
}

const closeModal = () => {
  backdrop.style.display = "none";
  modal.style.display = "none";
}

backdrop.addEventListener("click", closeModal);

modalNoButton.addEventListener("click", closeModal);




