export function insertEmail() {
  const mailtos = document.querySelectorAll(
    "a[href='mailto:me']",
  ) as NodeListOf<HTMLAnchorElement>;

  for (const mailto of mailtos) {
    mailto.href = "mailto:" + "e" + "t" +
      "h" + "m" + "a" + "r" + "k" + "s" + "." + "d" + "e" + "v" +
      "@" + "g" + "m" + "a" + "i" + "l" + "." + "c" + "o" + "m";
  }
}
