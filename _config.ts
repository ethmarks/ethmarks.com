import lume from "lume/mod.ts";

const site = lume({
  src: "./src",
  location: new URL("https://ethmarks.com/"),
});

site.add("assets/banner.png", "banner.png");
site.add("assets/favicon.ico", "favicon.ico");

export default site;
