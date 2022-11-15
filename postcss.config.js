import PurgeSvelte from "purgecss-from-svelte";
import PurgeCss from "@fullhuman/postcss-purgecss";

const plugins = [];

if (process.env.NODE_ENV === "production") {
  const purgeCssOptions = {
    content: ["./src/**/*.svelte"],
    safelist: ["html", "body"],
    extractors: [
      {
        extractor: (content) => PurgeSvelte.extract(content),
        extensions: ["svelte"],
      },
    ],
  };

  plugins.push(PurgeCss(purgeCssOptions));
}

export default {
  plugins,
};
