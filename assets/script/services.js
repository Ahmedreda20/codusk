var servicesItems = document.querySelectorAll(".services__items a");
var servicesViewer = document.querySelector(".services__viewer--container");
var serviceViewerItems = document.querySelectorAll(".service__viewer--item ");
servicesItems.forEach((service, serviceIndex) => {
  service.onclick = (e) => {
    e.preventDefault();

    scrollDownToCurrentSectionViewer(servicesViewer);
    // get children's from their parent element with current index
    let currentService = servicesItems[serviceIndex];
    // get window width

    servicesItems.forEach((serviceClass) =>
      serviceClass.classList.remove("active__service--view")
    );
    appendElementsServicesInsideSectionViewer(serviceIndex);
  };
});

function scrollDownToCurrentSectionViewer(viewer) {
  let header = document.querySelector(".codusk__header");
  window.scroll({
    top: viewer.offsetTop - header.getBoundingClientRect().height - 50,
    left: 0,
    behavior: "smooth",
  });
}
function appendElementsServicesInsideSectionViewer(index) {
  let currentService = servicesItems[index];
  let currentItem = serviceViewerItems[index];
  currentService.classList.add("active__service--view");
  serviceViewerItems.forEach((item) => {
    item.classList.replace("block", "hidden");
  });
  currentItem.classList.replace("hidden", "block");
  let btnServices = document.querySelectorAll(".back__services");
  btnServices.forEach((btn) => {
    btn.onclick = () => {
      let header = document.querySelector(".codusk__header"),
        servicesItemBox = servicesItems[index];
      window.scroll({
        top:
          servicesItemBox.offsetTop -
          header.getBoundingClientRect().height -
          50,
        left: 0,
        behavior: "smooth",
      });
    };
  });
}
