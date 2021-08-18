const card = document.querySelector(".card");
const title = document.querySelector(".title");
const textContainer = document.querySelector(".text-container");

card.onmouseover = () => {
    title.classList.remove("title-down");
    textContainer.classList.remove("text-down");

    title.classList.add("title-up");
    textContainer.classList.add("text-up");
};

card.onmouseout = () => {
    title.classList.remove("title-up");
    textContainer.classList.remove("text-up");

    // title.classList.add("title-down");
    textContainer.classList.add("text-down");
};
