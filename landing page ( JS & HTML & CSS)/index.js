const mainImage = document.getElementById("main-image");
const container = document.querySelector(".container")

function ChangeImage(imageSrc){
    mainImage.src = imageSrc;
}

function ChangeTheme(themeColor){
    container.style.background = themeColor;
}