// open and close nav bar in medium screen
const navBar = document.querySelector(".navBar__container");
const navAppend = document.querySelector(".navBar__btn--append");
navBar.querySelector(".navBar__btn").onclick = () => {
  navBar.classList.replace("flex", "hidden");
  document.body.classList.remove("overflow-y-hidden");
};
navAppend.onclick = () => {
  navBar.classList.replace("hidden", "flex");
  document.body.classList.add("overflow-y-hidden");
};
navBar.querySelectorAll("a").forEach((_link) => {
  _link.onclick = () => {
    navBar.classList.replace("flex", "hidden");
    document.body.classList.remove("overflow-y-hidden");
  };
});
// loading indictor
const body = document.body;
const html = document.documentElement;

var height = 0;
var h = 0;

const initiateHeights = function () {
  height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
  h =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
};

initiateHeights();

const resize = function (e) {
  const scrolled = Math.max(
    document.body.scrollTop,
    document.documentElement.scrollTop
  );
  height > 0
    ? (e[0].style.width = (scrolled / (height - h)) * 100 + "%")
    : (e.style.width = 0 + "%");
};

document.onscroll = function () {
  resize(document.getElementsByClassName("indicator__elem"));
};

window.onresize = function () {
  initiateHeights();
};

const btnTop = document.querySelector(".indictor__btn");
btnTop.onclick = () => {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
};

window.onscroll = () => {
  let header = document.querySelector(".codusk__header"),
    parentHeight = header.parentElement.getBoundingClientRect();

  if (
    document.documentElement.scrollTop >
    parentHeight.height - header.getBoundingClientRect().height
  ) {
    header.classList.add("bg-white"),
      header
        .querySelectorAll(".navBar__lg a")
        .forEach((a) => a.classList.replace("text-white", "text-gray-800")),
      header
        .querySelectorAll(".navBar__btn--append span")
        .forEach((span) => span.classList.replace("bg-white", "bg-gray-800"));
    header
      .querySelector(".codusk__header--box")
      .classList.add("border-b", "border-gray-200");
  } else {
    header.classList.remove("bg-white"),
      header
        .querySelectorAll(".navBar__lg a")
        .forEach((a) => a.classList.replace("text-gray-800", "text-white")),
      header
        .querySelectorAll(".navBar__btn--append span")
        .forEach((span) => span.classList.replace("bg-gray-800", "bg-white"));
    header
      .querySelector(".codusk__header--box")
      .classList.remove("border-b", "border-gray-200");
  }
};

// active link
const navBarLgLinks = document.querySelectorAll(".navBar__lg a");

navBarLgLinks.forEach((navLink) => {
  navLink.onclick = () => checkCurrentHrefWithCurrentURI(navLink);
});

function checkCurrentHrefWithCurrentURI(url) {
  let currentLocation = window.location.origin;
  navBarLgLinks.forEach((link) => {
    link.classList.remove("active__header--link");
  });
  currentLocation.indexOf(url.href) <= 0
    ? url.classList.add("active__header--link")
    : url.classList.remove("active__header--link");
}

// hide preload after page load
function HidePreload(elem) {
  let opacityValue = 100;
  let counter = setInterval(() => {
    opacityValue--;
    elem.style.opacity = `${opacityValue}%`;
    if (opacityValue === 0) {
      clearInterval(counter);
      elem.removeAttribute("style");
      elem.classList.replace("flex", "hidden");
      elem.querySelectorAll("svg path").forEach((path) => {
        path.style.cssText = "animation-play-state: paused;";
      });
      return false;
    }
  }, 15);
}

window.onload = () => {
  HidePreload(document.querySelector(".preload__container"));
  appendElementsServicesInsideSectionViewer(0);
};
