const saturate = document.getElementById("saturate");
const contrast = document.getElementById("contrast");
const brightness = document.getElementById("brightness");
const sepia = document.getElementById("sepia");
const grayscale = document.getElementById("grayscale");
const blur = document.getElementById("blur");
const hueRotate = document.getElementById("hue-rotate");

const download = document.getElementById("download");
const img = document.getElementById("img");
const upload = document.getElementById("upload");

//declare context to draw in canvas
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const imgBox = document.querySelector(".img-box");
const reset = document.querySelector("span");

function ResetValue() {
    img.style.filter = "none";
    saturate.value = "100";
    contrast.value = "100";
    brightness.value = "100";
    sepia.value = "0";
    grayscale.value = "0";
    blur.value = "0";
    hueRotate.value = "0";
}

window.onload = function () {
    download.style.display = "none";
    imgBox.style.display = "none";
    reset.style.display = "none";
}

upload.onchange = function () {
    ResetValue()
    download.style.display = "block";
    imgBox.style.display = "block";
    reset.style.display = "block";

    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = () => {
        img.src = file.result;
    }
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
        img.style.display = "none";
    }
}

const filters = document.querySelectorAll("ul li input");

filters.forEach(filter => {
    filter.addEventListener("input", () => {
        context.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hueRotate.value}deg)
        `
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
    })
});

download.onclick = () => {
    download.href = canvas.toDataURL();
}