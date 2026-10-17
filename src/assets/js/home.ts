import { insertEmail } from "./email.ts";

const registrationTime = document.getElementById("registrationTime");

// October 5, 2026
const RESIGTRATION_TIMESTAMP = 1791229428148;

function updateRegistrationTime() {
  const delta = RESIGTRATION_TIMESTAMP - Date.now();

  const days = Math.round(delta / 1000 / 60 / 60 / 24);
  const rtf = new Intl.RelativeTimeFormat("en", {
    numeric: "auto",
  });

  const text = rtf.format(days, "day");

  if (registrationTime) registrationTime.textContent = text;
}

setInterval(() => updateRegistrationTime(), 1000 * 60);
updateRegistrationTime();

insertEmail();
