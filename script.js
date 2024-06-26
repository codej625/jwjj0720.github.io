(() => {
  dday();
})();

const imageGallery = document.getElementById("image-gallery");

for (let index = 1; index <= 21; index++) {
  let number;
  if (index < 10) {
    number = index;
    number = '0' + String(number);
  } else {
    number = index;
  }
  console.log(number);
  const url = `./img/jj_${number}.jpeg`;
  const card = createCard(url);
  imageGallery.appendChild(card);
}

function createCard(imageUrl, altText) {
  const colDiv = document.createElement("div");
  colDiv.classList.add("col");

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "mt-3", "mb-3", "div-center");
  cardDiv.style.width = "18rem";

  const img = document.createElement("img");
  img.src = imageUrl;
  img.classList.add("card-img-top", "card-img-bottom");
  img.alt = altText;

  cardDiv.appendChild(img);
  colDiv.appendChild(cardDiv);

  return colDiv;
}

function dday() {
  const now = new Date();
  const start = new Date("2023-07-20");
  const timeDiff = now.getTime() - start.getTime();
  const day = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  
  return (document.getElementById("d-day").textContent = `진우🩷진주 ${day+1}일`);
}
