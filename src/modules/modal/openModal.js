const modal = document.querySelector("modal")
const modalShadow = document.querySelector(".shadow-modal")

export function openModal() {
  modal.style.display = "initial"
  modalShadow.style.display = "block"
}

function closeModal() {
  modal.style.display = "none"
  modalShadow.style.display = "none"
}

const buttonModal = document.querySelector("modal div button")

buttonModal.addEventListener("click", closeModal)