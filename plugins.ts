import sass from "lume/plugins/sass.ts";

import imageSize from "lume/plugins/image_size.ts";
import picture from "lume/plugins/picture.ts";
import transformImages from "lume/plugins/transform_images.ts";

// import minifyHTML from "lume/plugins/minify_html.ts";
import esbuild from "lume/plugins/esbuild.ts";
import gitInfo from "lume/plugins/git_info.ts";
import inline from "lume/plugins/inline.ts";
import jsx from "lume/plugins/jsx.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import svgo from "lume/plugins/svgo.ts";

import { smartMediaPlugin } from "jsr:@ethmarks/markdown-it-smart-media@^1.1.0";
import markdown from "lume/plugins/markdown.ts";
import readingInfo from "lume/plugins/reading_info.ts";
import anchorPlugin from "npm:markdown-it-anchor@^9.2.0";
import collapsiblePlugin from "npm:markdown-it-collapsible@^2.0.2";
import katexPlugin from "npm:markdown-it-katex@^2.0.3";

export default () => (site: Lume.Site) => {
  // Plugins
  site.use(esbuild({
    options: {
      keepNames: false,
    },
  }));
  site.use(sass());
  site.use(lightningCss());
  site.use(svgo());
  // site.use(minifyHTML());
  site.use(picture());
  site.use(transformImages());
  site.use(inline());
  site.use(readingInfo());
  site.use(imageSize());
  site.use(jsx());
  site.use(gitInfo());
  site.use(markdown({
    plugins: [
      anchorPlugin,
      collapsiblePlugin,
      katexPlugin,
      [smartMediaPlugin, {
        enabled: true,
        imageAttrs: "image-size loading=\"lazy\" decoding=\"async\" fetchpriority=\"auto\" class=\"responsive\"",
      }],
    ],
    options: {
      typographer: true,
    },
  }));

  ["favicon.ico", "css", "js", "img"].forEach((from) => site.add(`assets/${from}`, from));
};
