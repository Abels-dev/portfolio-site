const menu = document.querySelector(".menu");
const menuList = document.getElementById("menu-list");
const container = document.querySelector(".container");
menu.addEventListener("click", () => {
    menuList.classList.toggle("open-menu");
    container.classList.toggle("overlay");
});
menuList.addEventListener("click", (e) => {
    if(e.target.tagName === "A"){
        menuList.classList.remove("open-menu");
        container.classList.remove("overlay");
    }
});

const options = {
   origin: "left", 
   distance: "100px", 
   duration: 1000,
   easing: "ease-in-out",
   reset: true,
   delay: 300,
};

ScrollReveal().reveal(".slide-left", options);
ScrollReveal().reveal(".slide-right", { ...options, origin: "right" });
ScrollReveal().reveal(".about-content", {...options,origin:"top"});

