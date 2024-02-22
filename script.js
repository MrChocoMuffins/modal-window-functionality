"use strict";

const threeButtons = document.querySelectorAll(".show-modal");
const model = document.querySelector(".modal");
const closeButton = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const closeModal = function () {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < threeButtons.length; i++) {
  threeButtons[i].addEventListener("click", function () {
    model.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

closeButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !model.classList.contains("hidden")) {
    closeModal();
  }
});
