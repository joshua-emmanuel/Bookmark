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

const unselectAllTabs = (tabs) => {
    tabs.forEach(tab => {
        tab.setAttribute("aria-selected", false);
    });
}

const selectTab = (tab) => {
    tab.setAttribute("aria-selected", true);
}

const hideAllTabContents = (tabContents) => {
    tabContents.forEach(tabContent => {
        tabContent.hidden = true;
    });
}

const showClickedTabContent = (clickedTab, tabContents) => {
    const { id: clickedTabId } = clickedTab;
    const clickedTabContent = tabContents.find(tabContent => {
        return tabContent.getAttribute("aria-labelledby") === clickedTabId;
    });
    clickedTabContent.hidden = false;
}

const handleFeatureTabClick = (event) => {
    const clickedTab = event.target.closest(".feature__tab");
    unselectAllTabs(featureTabs);
    selectTab(clickedTab);
    hideAllTabContents(featureTabContents);
    showClickedTabContent(clickedTab, featureTabContents);
}

features.addEventListener("click", handleFeatureTabClick);

const getAccordionContentHeight = (accordion) => {
    const accordionInner = accordion.querySelector(".accordion__inner");
    if (accordion.classList.contains("is-open")) {
        return 0;
    } 
    return accordion.getBoundingClientRect().height;
}

const updateAccordion = (accordion, height) => {
    const accordionContent = accordion.querySelector(".accordion__content");
    accordion.classList.toggle("is-open");
    accordionContent.style.height = `${height}px`;
}

const handleAccordionClick = (event) => {
    const accordionHeader = event.target.closest(".accordion__header");
    if (!accordionHeader) return;
    const accordion = accordionHeader.parentElement;
    const height = getAccordionContentHeight(accordion);
    updateAccordion(accordion, height);
}

accordionContainer.addEventListener("click", handleAccordionClick);