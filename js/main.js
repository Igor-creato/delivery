const cardButton = document.querySelector("#card-button");
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');


// Первая функция добавляет класс, вторая убирает
// cardButton.addEventListener('click', function (event) {
//    modal.classList.add('is-open');
// });
// close.addEventListener('click', function (event) {
//    modal.classList.remove('is-open');
// });

// функция toggle одна поочеребно сначала добавляет потм
// убирает класс
cardButton.addEventListener('click', toggleModal);
close.addEventListener('click', toggleModal);

function toggleModal() {
   modal.classList.toggle('is-open');
};

new WOW().init();