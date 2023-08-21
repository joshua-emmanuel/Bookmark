const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".header__nav");
const logo = document.querySelector(".bookmark-logo");
const features = document.querySelector(".features");
const featureTabs = Array.from(document.querySelectorAll(".feature__tab"));
const featureTabContents = Array.from(document.querySelectorAll(".feature"));
const accordionContainer = document.querySelector(".faq-accordion");

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

function handleFeatureTabClick(event) {
    const clickedTab = event.target.closest(".feature__tab");
    // Unselect all tabs
    featureTabs.forEach(featureTab => {
        featureTab.setAttribute("aria-selected", false);
    });
    // Select clicked tab
    clickedTab.setAttribute("aria-selected", true);
    // Hide all tab Content
    const { id: clickedTabId } = clickedTab;
    featureTabContents.forEach(featureTabContent => {
        featureTabContent.hidden = true;
    });
    // Show clicked tab content
    const clickedTabContent = featureTabContents.find(featureTabContent => {
        return featureTabContent.getAttribute("aria-labelledby") === clickedTabId;
    });
    clickedTabContent.hidden = false;
}

features.addEventListener("click", handleFeatureTabClick);

function handleAccordionClick(event) {
    const accordionHeader = event.target.closest(".accordion__header");
    if (!accordionHeader) return;
    const accordion = accordionHeader.parentElement;
    const accordionContent = accordionHeader.nextElementSibling;
    const accordionInner = accordionContent.children[0];
    let height;
    if (accordion.classList.contains("is-open")) {
        height = 0;
    } else {
        height = accordionInner.getBoundingClientRect().height;
    }
    
    accordion.classList.toggle("is-open");
    accordionContent.style.height = `${height}px`;
}

accordionContainer.addEventListener("click", handleAccordionClick);