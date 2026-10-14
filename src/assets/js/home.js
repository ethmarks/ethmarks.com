const resigtrationTime = document.getElementById("resigtrationTime");

const RESIGTRATION_TIMESTAMP = 1791229428148;

/** this function was made by ai */
function formatRelativeTime(ms) {
  const seconds = Math.round(ms / 1000);
  const minutes = Math.round(seconds / 60);
  const hours = Math.round(minutes / 60);
  const days = Math.round(hours / 24);

  const rtf = new Intl.RelativeTimeFormat("en", {
    numeric: "auto",
  });

  if (Math.abs(seconds) < 60) {
    return rtf.format(seconds, "second");
  } else if (Math.abs(hours) < 24) {
    return rtf.format(minutes, "minute");
  } else {
    return rtf.format(days, "day");
  }
}

function updateRegistrationTime() {
  const delta = RESIGTRATION_TIMESTAMP - Date.now();
  const text = formatRelativeTime(delta);
  resigtrationTime.textContent = text;
}

setInterval(() => updateRegistrationTime(), 1000);
updateRegistrationTime();

/** @type {HTMLAnchorElement} */
const id = document.getElementById("email");
id.href = "mailto:" + "e" + "t" +
  "h" + "m" + "a" + "r" + "k" + "s" + "." + "d" + "e" + "v" +
  "@" + "g" + "m" + "a" + "i" + "l" + "." + "c" + "o" + "m";
