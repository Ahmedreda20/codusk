const contactForm = document.forms["contact__form"];
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let dType = event.target.dataset.type;
  dType === "email"
    ? setTimeout(handleSubmitViaEmail(event.target), 2000)
    : setTimeout(handleSubmitViaDB(event.target), 2000);
});

//send data from contact form via email and redirect visitor to mail

function handleSubmitViaEmail(current) {
  let bodyContent = `
        Hello dear.
        Good morning, I hope you are well. I'm ${current["username"].value}\n
        E-mail Address: ${current["email"].value}\n
        Phone Number: ${current["phone"].value}\n
        Message Contact: ${current["message"].value}
    `;
  let data = window.encodeURI(
    `subject=${current["username"].value}&body=${bodyContent}`
  );

  let email = "example@mailApp.domainname";

  window.open(`mailto: ${email}?${data}`);
  appendSucMessage();
}

//submit data inside db table
function handleSubmitViaDB(current) {
  let data = {
    username: current["username"].value,
    email: current["email"].value,
    phone: current["phone"].value,
    message: current["message"].value,
  };
  appendSucMessage();
}

function appendSucMessage() {
  let theirParent = document.createElement("div"),
    p = document.createElement("p"),
    span = document.createElement("span");
  p.innerText = "The message will be sent in a few seconds, thank you";
  theirParent.className =
    "w-auto p-4 rounded-lg bg-green-200 fixed bottom-0 right-0 m-5 z-20 overflow-hidden";
  p.className = "font-medium text-green-700";
  span.className =
    "absolute bottom-0 left-0 w-0 transition ease-in-out duraction-500 h-1 rounded-xl bg-green-800";
  theirParent.append(p);
  p.append(span);
  document.body.append(theirParent);
  span.classList.replace("m-0", "m-full");
  setInterval(() => {
    theirParent.remove();
  }, 2000);
}

// open and close nav bar in medium screen

const navBar = document.querySelector(".navBar__container");
const navAppend = document.querySelector(".navBar__btn--append");
navBar.querySelector(".navBar__btn").onclick = () => {
  navBar.classList.replace("flex", "hidden");
};
navAppend.onclick = () => {
  navBar.classList.replace("hidden", "flex");
};
navBar.querySelectorAll("a").forEach((_link) => {
  _link.onclick = () => {
    navBar.classList.replace("flex", "hidden");
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
