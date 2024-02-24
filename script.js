let storyData = [
    { dp: "https://i.pinimg.com/236x/8b/f4/e5/8bf4e57ba8b9ef246feb70cd0b09762e.jpg", story: "https://i.pinimg.com/236x/5f/d4/1d/5fd41d960ef6ef16c6adf4a10796fd3e.jpg" },
    { dp: "https://i.pinimg.com/236x/9f/74/68/9f7468fa70b8d44aaa9b66c348fd0d8f.jpg", story: "https://i.pinimg.com/236x/77/33/f5/7733f57cb7f6ea7db367a7fc1fdea0c1.jpg" },
    { dp: "https://i.pinimg.com/236x/2a/df/88/2adf882cc022621524a0d116c5775723.jpg", story: "https://i.pinimg.com/236x/84/2a/ea/842aea948f9c2479c748ba99a1ce71bc.jpg" },
    { dp: "https://i.pinimg.com/736x/db/e8/13/dbe813e21d5af62d054823f81ee5e0ab.jpg", story: "https://i.pinimg.com/236x/38/5d/18/385d18244fd4280c8ce77231f10ad713.jpg" }
]

let clutter = ""
let storyContainer = document.querySelector(".story-container")
let fullScreenStory = document.querySelector(".full-screen")
let closeStory = document.querySelector(".full-screen i")

storyData.forEach(function (story, index) {
    clutter += `
    <div class="story">
    <img id="${index}" src="${story.dp}" alt="">
    </div>
    `
})
storyContainer.innerHTML = clutter

storyContainer.addEventListener("click", function (details) {
    fullScreenStory.style.display = "block"
    fullScreenStory.style.background = `url(${storyData[details.target.id].story})`
    fullScreenStory.style.backgroundSize = "cover"
    fullScreenStory.style.backgroundPosition = "center"
    setTimeout(function () {
        fullScreenStory.style.display = "none"
    }, 3000)
})

closeStory.addEventListener("click", function () {
    fullScreenStory.style.display = "none"
})