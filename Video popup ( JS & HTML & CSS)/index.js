const btn = document.querySelector(".btn");
const closeIcon = document.querySelector(".close-icon");
const videoContainer = document.querySelector(".video-container");
const videoTag = document.querySelector("video");

btn.addEventListener("click", () => {
    videoContainer.classList.remove("active");
});

closeIcon.addEventListener("click", () => {
    videoContainer.classList.add("active");
    videoTag.pause();
    videoTag.currentTime = 0;
});