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
