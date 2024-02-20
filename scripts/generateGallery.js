export function createGallery() {
  const gallery = document.querySelector(".img-gallery");

  for (let i = 1; i <= 15; i++) {
    const image = document.createElement("picture");
    image.innerHTML = `
            <img loading="lazy" width="200" height="200" src="assets/imgs/thumb/${i}.jpg">
            `;

    image.onclick = function () {
      showImage(i);
    };

    gallery.appendChild(image);
  }
}

function showImage(id) {
  const image = document.createElement("picture");
  image.innerHTML = `
            <img loading="lazy" src="assets/imgs/thumb/${id}.jpg">
            `;


  // Crear el modal
  const modalImg = document.createElement("div");
  const modalControls = document.createElement("div");
  modalImg.classList.add("modal-img");
  modalControls.classList.add("modal-controls");

  modalImg.onclick = function () {
    const body = document.querySelector("body");
    body.classList.remove("body-fixed");
    modalImg.remove();
  };

  // Botón imagen previa
  const prevButton = document.createElement("button");
  prevButton.innerHTML = '<i class="bi bi-arrow-left"></i>';
  prevButton.classList.add("modal-btn");

  prevButton.onclick = function() {
    showPrevImage(id);
  };

  // Botón imagen siguiente
  const nextButton = document.createElement("button");
  nextButton.innerHTML = '<i class="bi bi-arrow-right"></i>';
  nextButton.classList.add("modal-btn");

  nextButton.onclick = function() {
    showNextImage(id);
  };

  // Botón para cerrar modal
  const closeModalBtn = document.createElement("button");
  // closeModalBtn.textContent = "x";
  closeModalBtn.innerHTML = '<i class="bi bi-x-lg"></i>';
  closeModalBtn.classList.add("modal-btn");

  closeModalBtn.onclick = function () {
    const body = document.querySelector("body");
    body.classList.remove("body-fixed");
    modalImg.remove();
  };
  
  modalImg.appendChild(modalControls);
  modalControls.appendChild(prevButton);
  modalControls.appendChild(image);
  modalControls.appendChild(nextButton);
  modalImg.appendChild(closeModalBtn);

  // Añadir al HTML
  const body = document.querySelector("body");
  body.appendChild(modalImg);
  body.classList.add("body-fixed");

function showNextImage(currentId) {
  const nextId = (currentId % 15) + 1;
  showImage(nextId);
}

function showPrevImage(currentId) {
  const prevId = (currentId - 2 + 15) % 15 + 1;
  showImage(prevId);
}

};