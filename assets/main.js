const pictures = [
  { id: 1, card: "card card_small", photo: "./assets/img/photo01.jpeg" },
  { id: 2, card: "card card_large", photo: "./assets/img/photo02.jpeg" },
  { id: 3, card: "card card_small", photo: "./assets/img/photo03.jpeg" },
  { id: 4, card: "card card_small", photo: "./assets/img/photo04.jpeg" },
  { id: 5, card: "card card_midium", photo: "./assets/img/photo05.jpeg" },
  { id: 6, card: "card card_small", photo: "./assets/img/photo06.jpeg" },
  { id: 7, card: "card card_midium", photo: "./assets/img/photo07.jpeg" },
  { id: 8, card: "card card_large", photo: "./assets/img/photo08.jpeg" },
  { id: 9, card: "card card_small", photo: "./assets/img/photo09.jpeg" },
  { id: 10, card: "card card_midium", photo: "./assets/img/photo10.jpeg" },
  { id: 11, card: "card card_small", photo: "./assets/img/photo11.jpeg" },
  { id: 12, card: "card card_midium", photo: "./assets/img/photo12.jpeg" },
  { id: 13, card: "card card_small", photo: "./assets/img/photo13.jpeg" },
  { id: 14, card: "card card_midium", photo: "./assets/img/photo14.jpeg" },
  { id: 15, card: "card card_large", photo: "./assets/img/photo15.jpeg" },
  { id: 16, card: "card card_large", photo: "./assets/img/photo16.jpeg" },
  { id: 17, card: "card card_large", photo: "./assets/img/photo17.jpeg" },
  { id: 18, card: "card card_small", photo: "./assets/img/photo18.jpeg" },
  { id: 19, card: "card card_midium", photo: "./assets/img/photo19.jpeg" },
  { id: 20, card: "card card_small", photo: "./assets/img/photo20.jpeg" },
  { id: 21, card: "card card_midium", photo: "./assets/img/photo21.jpeg" },
  { id: 22, card: "card card_large", photo: "./assets/img/photo22.jpeg" },
  { id: 23, card: "card card_large", photo: "./assets/img/photo23.jpeg" },
  { id: 24, card: "card card_midium", photo: "./assets/img/photo24.jpeg" },
  { id: 25, card: "card card_small", photo: "./assets/img/photo25.jpeg" },

  { id: 26, card: "card card_small", photo: "./assets/img/photo26.jpeg" },
  { id: 27, card: "card card_midium", photo: "./assets/img/photo27.jpeg" },
  { id: 28, card: "card card_midium", photo: "./assets/img/photo28.jpeg" },
  { id: 29, card: "card card_large", photo: "./assets/img/photo29.jpeg" },
  { id: 30, card: "card card_small", photo: "./assets/img/photo30.jpeg" },
  { id: 31, card: "card card_midium", photo: "./assets/img/photo31.jpeg" },
  { id: 32, card: "card card_small", photo: "./assets/img/photo32.jpeg" },
  { id: 33, card: "card card_small", photo: "./assets/img/photo33.jpeg" },
  { id: 34, card: "card card_large", photo: "./assets/img/photo34.jpeg" },
  { id: 35, card: "card card_midium", photo: "./assets/img/photo35.jpeg" },
  { id: 36, card: "card card_small", photo: "./assets/img/photo36.jpeg" },
  { id: 37, card: "card card_small", photo: "./assets/img/photo37.jpeg" },
  { id: 38, card: "card card_large", photo: "./assets/img/photo38.jpeg" },
  { id: 39, card: "card card_large", photo: "./assets/img/photo39.jpeg" },
  { id: 40, card: "card card_small", photo: "./assets/img/photo40.jpeg" },
  { id: 41, card: "card card_midium", photo: "./assets/img/photo41.jpeg" },
  { id: 42, card: "card card_small", photo: "./assets/img/photo42.jpeg" },
];

window.addEventListener("DOMContentLoaded", function () {
  renderPictures();
});

function renderPictures() {
  var html = "";
  for (let i = 0; i < pictures.length; i++) {
    let item = pictures[i];
    html += `
            <div class="${item.card}">
                <img
                src=${item.photo}
                alt="photo"
                width="100"
                height="100"
                />
            </div>
        `;
  }

  setHTML(".content", html);
}

function setHTML(selector, value) {
  let element = document.querySelector(selector);
  element.innerHTML = value;
}
