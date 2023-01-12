const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".header__nav");
const logo = document.querySelector(".bookmark-logo");
const featureBtn = document.querySelectorAll(".feature-head h3");
const featureImg = document.querySelector(".feature-img");
const featureTitle = document.querySelector(".feature__text h2");
const featureParagraph = document.querySelector(".feature__text p");
const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");

navToggle.addEventListener("click",  () => {
    const visibility = nav.getAttribute("data-visible");

    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
        logo.src = "assets/images/logo-bookmark(all-white).svg";
    } else if (visibility === "true") {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
        logo.src = "assets/images/logo-bookmark.svg";
    }
});


for (let i = 0; i < featureBtn.length; i++) {
    if (i === 0) {
        featureBtn[i].addEventListener("click", () => {
            featureBtn[1].setAttribute("data-visible", false);
            featureBtn[2].setAttribute("data-visible", false);
            featureBtn[i].setAttribute("data-visible", true);
            featureImg.src = "assets/images/illustration-features-tab-1.svg";
            featureTitle.innerHTML = "Bookmark in one click";
            featureParagraph.innerHTML = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
        })
    } if (i === 1) {
        featureBtn[i].addEventListener("click", () => {
            featureBtn[0].setAttribute("data-visible", false);
            featureBtn[2].setAttribute("data-visible", false);
            featureBtn[i].setAttribute("data-visible", true);
            featureImg.src = "assets/images/illustration-features-tab-2.svg";
            featureTitle.innerHTML = "Intelligent search";
            featureParagraph.innerHTML = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
        })
    } if (i === 2) {
        featureBtn[i].addEventListener("click", () => {
            featureBtn[0].setAttribute("data-visible", false);
            featureBtn[1].setAttribute("data-visible", false);
            featureBtn[i].setAttribute("data-visible", true);
            featureImg.src = "assets/images/illustration-features-tab-3.svg";
            featureTitle.innerHTML = "Share your bookmarks";
            featureParagraph.innerHTML = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
        })
    }
}


for (let i = 0; i < question.length; i++) {
    question[i].addEventListener("click", () => {
        const visibility = answer[i].getAttribute("data-visible");
        if (visibility === "false") {
            answer[i].setAttribute("data-visible", true);
        } else if (visibility === "true") {
            answer[i].setAttribute("data-visible", false);
        }
    })
}