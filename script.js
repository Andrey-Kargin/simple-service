new Flickity( '.ss-carousel', {
  draggable: false,
  pageDots: false,
  fade: true
});

new Flickity( '.carousel-mobile', {
  draggable: false,
  pageDots: false,
  fade: true

});

new Flickity('.how-works-carousel', {
  draggable: false,
  pageDots: false,
  fade: true
});

// Получаем все элементы с классом accordion__arrow
const accordionArrows = document.querySelectorAll('.accordion__arrow');

const popupFill = document.querySelector('.popup__fill')
const popupTest = document.querySelector('.popup__test')
const popupAdapt = document.querySelector('.popup__adapt')

const fillBtn =document.getElementById('fill-btn')
const testBtn =document.getElementById('test-btn')
const adaptBtn =document.getElementById('adapt-btn')
const trialBtn =document.getElementById('trial-btn')

const closePopupFillBtn = document.querySelectorAll('.close-fill')
const closePopupTestBtn = document.querySelectorAll('.close-test')
const closePopupAdaptBtn = document.querySelectorAll('.close-adapt')

const filledBtn = document.querySelector('.filled__btn')
const trialClose = document.querySelector('.free-trial__close-btn')

const unfilledForm = document.querySelector('.free-trial .free-trial__unfilled')
const filledForm = document.querySelector('.free-trial .free-trial__filled')

const sendBtn = document.querySelectorAll('.popup__form-btn')
const success = document.querySelector('.success')
const closeSuccessBtn = document.querySelector('.success__close-btn')
const confirmSuccess = document.querySelector('.success__btn')

const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav')
const btn = document.getElementById('btn')
const navBtn = document.querySelectorAll('.header__nav-link')

function openBurger() {
    burger.classList.toggle('burger_active')
    nav.classList.toggle('navbar_opened')
}

btn.addEventListener('click', openBurger)
burger.addEventListener('click', openBurger)
navBtn.forEach(function(el) {
  el.addEventListener('click', openBurger)
})

// Перебираем все найденные элементы
accordionArrows.forEach(arrow => {
  // Назначаем обработчик события "клик" на каждый элемент с классом accordion__arrow
  arrow.addEventListener('click', () => {
    // Находим родительский элемент с классом accordion__card для текущего arrow
    const accordionCard = arrow.closest('.accordion__card');
    
    // Находим все элементы с классом accordion__card и классом accordion_active
    const activeCards = document.querySelectorAll('.accordion__card.accordion_active');
    
    // Убираем класс accordion_active у всех элементов, кроме текущего
    activeCards.forEach(card => {
      if (card !== accordionCard) {
        card.classList.remove('accordion_active');
      }
    });
    
    // Добавляем/удаляем класс accordion_active у текущего родительского элемента
    accordionCard.classList.toggle('accordion_active');
  });
});

function openPopupFill() {
  popupFill.classList.add('popup_opened')
}

function closePopupFill() {
  popupFill.classList.remove('popup_opened')
}

function openPopupTest() {
  popupTest.classList.add('popup_opened')
}

function closePopupTest() {
  popupTest.classList.remove('popup_opened')
}

function openPopupAdapt() {
  popupAdapt.classList.add('popup_opened')
}

function closePopupAdapt() {
  popupAdapt.classList.remove('popup_opened')
}

function openSuccess() {
  popupFill.classList.remove('popup_opened')
  popupTest.classList.remove('popup_opened')
  popupAdapt.classList.remove('popup_opened')
  success.classList.add('success_opened')
}

function closeSuccess() {
  success.classList.remove('success_opened')
}

function sendTrial() {
  unfilledForm.style.display = "none"
  filledForm.style.display = "flex"
}

function closeTrial() {
  unfilledForm.style.display = "flex"
  filledForm.style.display = "none"
}

filledBtn.addEventListener('click', closeTrial)
trialClose.addEventListener('click', closeTrial)

trialBtn.addEventListener('click', sendTrial)

fillBtn.addEventListener('click', openPopupFill)
closePopupFillBtn.forEach(function(el) {
  el.addEventListener('click', closePopupFill)
})

testBtn.addEventListener('click', openPopupTest)
closePopupTestBtn.forEach(function(el) {
  el.addEventListener('click', closePopupTest)
})

adaptBtn.addEventListener('click', openPopupAdapt)
closePopupAdaptBtn.forEach(function(el) {
  el.addEventListener('click', closePopupAdapt)
})

confirmSuccess.addEventListener('click', closeSuccess)
sendBtn.forEach(function(el) {
  el.addEventListener('click', openSuccess)
})
closeSuccessBtn.addEventListener('click', closeSuccess)