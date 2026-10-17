function insertEmail(mailto: HTMLAnchorElement): void {
  const user = "e" + "t" + "h" + "m" + "a" + "r" + "k" + "s" + "." + "d" + "e"
    + "v";
  const domain = "g" + "m" + "a" + "i" + "l" + "." + "c" + "o" + "m";
  mailto.href = "mailto:" + user + "@" + domain;
}

export function initEmail() {
  const mailtos = document.querySelectorAll(
    "a[href='mailto:me']",
  ) as NodeListOf<HTMLAnchorElement>;

  for (const mailto of mailtos) {
    mailto.addEventListener("mouseenter", () => insertEmail(mailto), {
      once: true,
    });
    mailto.addEventListener("focus", () => insertEmail(mailto), { once: true });
    mailto.addEventListener("click", () => insertEmail(mailto));
  }
}
