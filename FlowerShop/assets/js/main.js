//slider slider slider :D ...
window.addEventListener("load", function () {
    const sliderMain = document.querySelector(".slider-main");
    const sliderItems = document.querySelectorAll(".slider-item");
    const nextBtn = document.querySelector(".slider-next");
    const prevBtn = document.querySelector(".slider-prev");
    const dotsItems = document.querySelectorAll(".slider-dot-item");
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const sliderLength = sliderItems.length;
    let positionX = 0;
    let index = 0;
    [...dotsItems].forEach((item) =>
        item.addEventListener("click", function (e) {
            [...dotsItems].forEach((el) => el.classList.remove("active"));
            e.target.classList.add("active");
            const slideIndex = parseInt(e.target.dataset.index);
            index = slideIndex;
            positionX = -1 * index * sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
        })
    );
    nextBtn.addEventListener("click", function () {
        handleChangeSlide(1);
    });
    prevBtn.addEventListener("click", function () {
        handleChangeSlide(-1);
    });

    function handleChangeSlide(direction) {
        if (direction === 1) {
            if (index >= sliderLength - 1) {
                index = sliderLength - 1;
                return;
            }
            positionX = positionX - sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            index++;
        } else if (direction === -1) {
            if (index <= 0) {
                index = 0;
                return;
            }
            positionX = positionX + sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            index--;
        }
        [...dotsItems].forEach((el) => el.classList.remove("active"));
        dotsItems[index].classList.add("active");
    }
});
// menu trên mobile
var mobileMenu = document.getElementById("js-mobile-nav");
var navList = document.getElementById("js-nav-list");
// mobileMenu.onclick = function () {
//   if (navList.style.display != "block") {
//     navList.style.display = "block";
//   } else {
//     navList.style.display = "none";
//   }
// };
// -- -- -- -- -- -- --
var menuItems = document.querySelectorAll(
    '#js-nav-list .nav_item a[href*="#"]'
);
var checkBox = document.querySelector(".js-checkbox");
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function (event) {
        if (checkBox.checked) {
            checkBox.checked = false;
        }
    };
}
//script đổi màu header
var heading = document.querySelector(".js-header");
window.addEventListener("scroll", function () {
    if (window.screenY > 300) {
        heading.classList.add("sticky");
    } else {
        heading.classList.remove("sticky");
    }
});
// -----------
window.onscroll = function () {
    if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
    ) {
        heading.classList.add("sticky");
        heading.classList.remove("nav-transparent");
    } else {
        heading.classList.add("nav-transparent");
        heading.classList.remove("sticky");
    }
};
//
