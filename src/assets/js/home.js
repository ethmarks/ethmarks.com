const resigtrationTime = document.getElementById("resigtrationTime");

const RESIGTRATION_TIMESTAMP = 1791229428148;

function updateRegistrationTime() {
  const delta = RESIGTRATION_TIMESTAMP - Date.now();

  const days = Math.round(delta / 1000 / 60 / 60 / 24);
  const rtf = new Intl.RelativeTimeFormat("en", {
    numeric: "auto",
  });

  const text = rtf.format(days, "day");

  resigtrationTime.textContent = text;
}

setInterval(() => updateRegistrationTime(), 1000 * 60);
updateRegistrationTime();

/** @type {HTMLAnchorElement} */
const id = document.getElementById("email");
id.href = "mailto:" + "e" + "t" +
  "h" + "m" + "a" + "r" + "k" + "s" + "." + "d" + "e" + "v" +
  "@" + "g" + "m" + "a" + "i" + "l" + "." + "c" + "o" + "m";
