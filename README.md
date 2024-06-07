# typedoc-theme-method-tag-filter

A theme for support filtering methods by tags (such as `@internal`).

The default theme of typedoc already has tag filters enabled by adding `@{tagName}` to `visibilityFilters`, but it's not applied to methods.
This theme adds support for that.

## Install

`npm run build`

!! This theme is currently not released on npm, so build and copy `dist/index.js` to your project.

## Example

First, `npm install` in `example` project.

```sh
cd ./example
npm install
```

Then, return to the root and build example document.

```sh
cd -
npm run docs:example`
```

See `./example/docs/index.html` with your browser and enable/disable `Internal` filter.

