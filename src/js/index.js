import '../scss/styles.scss';
import Swiper from './swiper-bundle.min';

// кнопка показать\скрыть в блоке about

const buttonIndex = document.querySelector("#buttonReadIndex");
const listIndex = document.querySelector("#aboutTextClass");

buttonIndex.addEventListener("click", function (event) {
  listIndex.classList.toggle("about__text--height");
  buttonIndex.classList.toggle("button-arrow-scroll--inverted");

  if (listIndex.classList.contains("about__text--height")) {
    buttonIndex.textContent = "Скрыть";
  } else {
    buttonIndex.textContent = "Читать далее";
  }
});

// кнопка показать\скрыть в блоке brands

const buttonBrands = document.querySelector("#buttonBrandsMenu");
const listBrands = document.querySelector("#brandMainMenuclass");

buttonBrands.addEventListener("click", function (event) {
  listBrands.classList.toggle("brand-main-menu--height");
  buttonBrands.classList.toggle("button-show--inverted");

  if (listBrands.classList.contains("brand-main-menu--height")) {
    buttonBrands.textContent = "Скрыть все";
  } else {
    buttonBrands.textContent = "Показать все";
  }
});

// кнопка показать\скрыть в блоке tech

const buttonTechique = document.querySelector("#buttonShowTechnique");
const listTechique = document.querySelector("#techniqueMainClass");

buttonTechique.addEventListener("click", function (event) {
  listTechique.classList.toggle("technique-main-menu--height");
  buttonTechique.classList.toggle("button-show--inverted");

  if (listTechique.classList.contains("technique-main-menu--height")) {
    buttonTechique.textContent = "Скрыть все";
  } else {
    buttonTechique.textContent = "Показать все";
  }
});

// модальное окно - звонок

const buttonOverlayCall = document.querySelector("#buttonCloseModalCall");
const listModalCall = document.querySelector("#modalCall");
const overlayListC = document.querySelector("#overlayCall");

buttonOverlayCall.addEventListener("click", function (event) {
  listModalCall.classList.toggle("modal--hidden");
  overlayListC.classList.toggle("overlay--hidden");
});

overlayListC.addEventListener("click", function (event) {
  listModalCall.classList.toggle("modal--hidden");
  overlayListC.classList.toggle("overlay--hidden");
});

// модальное окно - обратная связь

const buttonOverlayFeedback = document.querySelector(
  "#buttonCloseModalFeedback"
);
const listModalFeedback = document.querySelector("#modalFeedback");
const overlayListF = document.querySelector("#overlayFeedback");

buttonOverlayFeedback.addEventListener("click", function (event) {
  listModalFeedback.classList.toggle("modal--hidden");
  overlayListF.classList.toggle("overlay--hidden");
});

overlayListF.addEventListener("click", function (event) {
  listModalFeedback.classList.toggle("modal--hidden");
  overlayListF.classList.toggle("overlay--hidden");
});

// кнопка звонок - открыть модальное окно звонок Header

const buttonOpenCallHeader = document.querySelector(
  "#buttonOpenModalCallHeader"
);

buttonOpenCallHeader.addEventListener("click", function (event) {
  listModalCall.classList.toggle("modal--hidden");
  overlayListC.classList.toggle("overlay--hidden");
});

// кнопка сообшщение - открыть модальное окно обратная связь Header

const buttonOpenFeedbackHeader = document.querySelector(
  "#buttonOpenModalFeedbackHeader"
);

buttonOpenFeedbackHeader.addEventListener("click", function (event) {
  listModalFeedback.classList.toggle("modal--hidden");
  overlayListF.classList.toggle("overlay--hidden");
});

// кнопка звонок - открыть модальное окно звонок SideBar

const buttonOpenCall = document.querySelector("#buttonOpenModalCall");

buttonOpenCall.addEventListener("click", function (event) {
  listModalCall.classList.toggle("modal--hidden");
  overlayListC.classList.toggle("overlay--hidden");

});

// кнопка сообшщение - открыть модальное окно обратная связь SideBar

const buttonOpenFeedback = document.querySelector("#buttonOpenModalFeedback");

buttonOpenFeedback.addEventListener("click", function (event) {
  listModalFeedback.classList.toggle("modal--hidden");
  overlayListF.classList.toggle("overlay--hidden");

});

// кнопка закрыть sidebar-menu

const buttonCloseSidebarMenu = document.querySelector("#buttonCloseSidebar");
const listSideBar = document.querySelector("#sidebarMenu");
const overlayListSide = document.querySelector("#overlayMenu");

buttonCloseSidebarMenu.addEventListener("click", function (event) {
  listSideBar.classList.toggle("sidebar-menu--hidden");
  overlayListSide.classList.toggle("overlay--hidden");
});

overlayListSide.addEventListener("click", function (event) {
  listSideBar.classList.toggle("sidebar-menu--hidden");
  overlayListSide.classList.toggle("overlay--hidden");
});

// бургер-кнопка открыть sidebar-menu

const buttonBurgerHeader = document.querySelector("#burgerButtonHeader");

buttonBurgerHeader.addEventListener("click", function (event) {
  listSideBar.classList.toggle("sidebar-menu--hidden");
  overlayListSide.classList.toggle("overlay--hidden");
});




const windowInnerWidth = window.innerWidth;

// свайпер бренд меню

if (windowInnerWidth < 768) {
  new Swiper(".brand-main-menu", {
    // отображение слайда - заполнение дост пространства
    slidesPerView: "auto",

    // обертка для слайдера
    wrapperClass: "brand-main-menu__list",

    // класс слайда

    slideClass: "brand-main-menu__item",

    // расстояние между слайдами
    spaceBetween: 16,

    pagination: {
      el: "#paginationSliderBrands",
      clickable: true,
    },
  });

  // свайпер тех меню

  new Swiper(".technique-main-menu", {
    // отображение слайда - заполнение дост пространства
    slidesPerView: "auto",

    // обертка для слайдера
    wrapperClass: "technique-main-menu__list",

    // класс слайда

    slideClass: "technique-main-menu__item",

    // расстояние между слайдами
    spaceBetween: 16,

    pagination: {
      el: "#paginationSliderTech",
      clickable: true,
    },
  });

  // свайпер прайс меню

  new Swiper(".price-main-menu__table", {
    // отображение слайда - заполнение дост пространства
    slidesPerView: "auto",

    // обертка для слайдера
    wrapperClass: "price-main-menu__body",

    // класс слайда

    slideClass: "price-main-menu__row",

    // расстояние между слайдами
    spaceBetween: 16,

    pagination: {
      el: "#paginationSliderPrice",
      clickable: true,
    },
  });
}



