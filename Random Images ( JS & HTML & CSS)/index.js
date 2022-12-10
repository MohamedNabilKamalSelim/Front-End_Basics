const imagesContainer = document.querySelector(".images-container");
const btn = document.querySelector(".btn");

let imageNum = 10;

window.onload = function () {
    LoadMoreImages();
}

btn.addEventListener("click", () => {
    LoadMoreImages();
});

function LoadMoreImages(){
    for (let i = 0; i < imageNum; i++) {
        let newImages = document.createElement("img");
        newImages.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
        imagesContainer.appendChild(newImages);
    }
}