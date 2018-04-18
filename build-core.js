const browserify = require("browserify");
const fs = require("fs");

browserify({
  entries: "bundle/prettier-core.js",
  fullPaths: true,
  list: true,
  transform: [
    ["browserify-replace", {
      replace: [
        {
          from: "_token_stack:",
          to: ""
        }
      ]
    }],
    ["babelify", {global: true}],
  ],
  plugin: ["babelify-external-helpers"],
  bare: true
})
  .bundle()
  .pipe(fs.createWriteStream("dist/prettier/prettier-core.js"));
