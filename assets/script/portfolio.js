// portfolio filter
const btnFilters = document.querySelectorAll(".btn__portfolio--filter");
const portfolioItemsBox = document.querySelectorAll(".portfolio__item");

handleSlidersOnClick(portfolioItemsBox);

btnFilters.forEach((btnFilter) => {
  let CurrentPortfolioItems = [];
  btnFilter.addEventListener("click", () => {
    let btnFilterType = btnFilter.dataset.portfolioType;
    btnFilters.forEach((btnF) => {
      btnF.classList.remove("btn__portfolio--active");
    });
    btnFilter.classList.add("btn__portfolio--active");
    portfolioItemsBox.forEach((portfolioItem) => {
      let portfolioType = portfolioItem.dataset.portfolioType;
      if (btnFilterType === portfolioType) {
        portfolioItem.classList.remove("hidden");
      } else if (btnFilterType === "all") {
        portfolioItem.classList.remove("hidden");
      } else {
        portfolioItem.classList.add("hidden");
      }

      if (!portfolioItem.classList.contains("hidden")) {
        CurrentPortfolioItems.push(portfolioItem);
        handleSlidersOnClick(CurrentPortfolioItems);
      }
    });
  });
});

// portfolio gallery viewer
var portfolioViewer = document.querySelector(".portfolio__viewer");
// close portfolio viewer when click on close button
portfolioViewer.querySelector(".portfolio__btn--close").onclick = () => {
  portfolioViewer.classList.add("hidden");
};

function handleSlidersOnClick(itemsArray) {
  let portfolioCurrentItems = itemsArray;
  let newSetItems = [...new Set(portfolioCurrentItems)];
  let numbers = document.querySelectorAll(".portfolio__numbers--box span");
  newSetItems.forEach((portfolio, portfolioCurrentIndex) => {
    portfolio.addEventListener("click", () => {
      numbers[0].innerHTML = portfolioCurrentIndex + 1;
      numbers[1].innerHTML = newSetItems.length;
      portfolioViewer.classList.remove("hidden");
      document.querySelector(".portfolio__viewer--img").src =
        portfolio.querySelector("img").src;
      sliderButtonsControl(
        ".portfolio__btn--next",
        ".portfolio__btn--prev",
        portfolioCurrentIndex,
        newSetItems,
        numbers
      );
    });
  });
}

function sliderButtonsControl(next, prev, items, portfolioItems, numbers) {
  const btnNext = document.querySelector(next);
  const btnPrev = document.querySelector(prev);
  let sliders = items;
  document.querySelector(".portfolio__viewer--img").src =
    portfolioItems[sliders].querySelector("img").src;
  btnNext.onclick = () => {
    if (sliders < portfolioItems.length - 1) {
      sliders++;
      portfolioViewer.querySelector("img").src =
        portfolioItems[sliders].querySelector("img").src;
      showCurrentIndex(sliders, numbers, true);
    }
  };

  btnPrev.onclick = () => {
    if (sliders > 0) {
      sliders--;
      portfolioViewer.querySelector("img").src =
        portfolioItems[sliders].querySelector("img").src;
      showCurrentIndex(sliders, numbers, false);
    }
  };
}

function showCurrentIndex(slideIndex, numbers, action) {
  action
    ? (numbers[0].innerHTML = slideIndex + 1)
    : (numbers[0].innerHTML = slideIndex + 1);
}
