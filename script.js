function accept() {
  const close = document.getElementById("popUpWrapper");
  close.classList.add("clicked");
  const consent = document.getElementById("mainWrapper");
  consent.classList.add("consent");
  const textConsent = document.getElementById("placeholderText");
  textConsent.classList.add("consent");
  const boxConsent = document.getElementById("box");
  boxConsent.classList.add("consent");
  console.log("Button clicked.");
}
function exit() {
  const close = document.getElementById("popUpWrapper");
  close.classList.add("clicked");
  console.log("Popup exited.");
}
