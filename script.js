// script.js

const cards = document.querySelectorAll(".project-card");

const popup = document.getElementById("popup");

const popupTitle = document.getElementById("popupTitle");
const popupDesc = document.getElementById("popupDesc");
const popupImage = document.getElementById("popupImage");

const closeBtn = document.getElementById("closeBtn");

cards.forEach(card => {

  card.addEventListener("click", () => {

    const title = card.dataset.title;
    const desc = card.dataset.desc;
    const image = card.dataset.image;

    popupTitle.innerText = title;
    popupDesc.innerText = desc;
    popupImage.src = image;

    popup.classList.add("active");

    document.body.style.overflow = "hidden";

  });

});

closeBtn.addEventListener("click", closePopup);

popup.addEventListener("click", (e) => {

  if(e.target === popup){
    closePopup();
  }

});

document.addEventListener("keydown", (e) => {

  if(e.key === "Escape"){
    closePopup();
  }

});

function closePopup(){

  popup.classList.remove("active");

  document.body.style.overflow = "auto";

}