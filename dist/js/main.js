const neonButton = document.querySelector(".neon-button");
const shadow = document.querySelector(".shadow");

neonButton.onmouseover = () => {
    shadow.classList.remove("heavyShadow");
    shadow.classList.add("lightShadow");
};

neonButton.onmouseout = () => {
    shadow.classList.remove("lightShadow");
    shadow.classList.add("heavyShadow");
};
