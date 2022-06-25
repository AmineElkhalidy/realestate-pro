/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".popular__container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPreview: "auto",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== VALUE ACCORDION ===============*/
const accordianItems = document.querySelectorAll(".value_accordian-item");

accordianItems.forEach((item) => {
  const accordianHeader = item.querySelector(".value_accordian-header");

  accordianHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordian-open");
    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordianContent = item.querySelector("value__accordian-content");

  if (item.classList.contains("accordian-open")) {
    accordianContent.removeAttribute("style");
    item.classList.remove("accordian-open");
  } else {
    accordianContent.style.height = accordianContent.scrollHeight + "px";
    item.classList.add("accordian-open");
  }
};
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
