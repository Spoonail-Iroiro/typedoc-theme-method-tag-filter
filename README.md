# typedoc-theme-method-tag-filter

A theme to support filtering methods by tags (such as `@internal`).

The default theme of typedoc already has tag filters that can be enabled by adding `@{tagName}` to `visibilityFilters`, but they are not applied to methods.
This theme adds support for that.

## Install


```sh
npm run build
```

!! This theme is currently not released on npm, so build and copy `dist/index.js` to your project.

## Example

First, `npm install` in `example` project.

```sh
cd ./example
npm install
```

Then, return to the root and build the example document:

```sh
cd -
npm run docs:example`
```

Open `./example/docs/index.html` in your browser and enable/disable `Internal` filter.

