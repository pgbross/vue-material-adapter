# Material Components for Vue

[![Greenkeeper badge](https://badges.greenkeeper.io/pgbross/vue-material-adapter.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.com/pgbross/vue-material-adapter.svg?branch=master)](https://travis-ci.com/pgbross/vue-material-adapter)

`vue-material-adapter` is an integration of
[Material Components](https://material.io/components/web/)
for [Vue.js](https://vuejs.org) which follows the best practices
recommended by Google:
[Using Foundations and Adapters](https://github.com/material-components/material-components-web/blob/master/docs/integrating-into-frameworks.md#the-advanced-approach-using-foundations-and-adapters)

This project aims to find the right balance between ease of use and
customization while sticking to the _Vue Spirit_ (approachable, versatile, and performant)

## Install

```
$ npm install vue-material-adapter
```

## Release Notes

`v0.15.0` - This release targets the recently released `material-components-web v5.1.0`. BREAKING CHANGE: It no longer re-exports the `@material` stylesheets so any CSS stylesheets will need to use the `material-components-web` stylesheets directly.

`v0.14.0` - This release changes how the `mcw-list` component is structured in order to support the `select` component properly, note this is a BREAKING CHANGE.

There are now examples of using `vue-material-adapter` both as a `basic-global` and a `basic-webpack` project [examples](https://github.com/pgbross/vue-material-adapter/tree/master/examples)

`v0.13.0` - This release now uses `material-components-web` v4.0.0 so there are significant changes in how several of the packages work and are structured.

The most notable change is with the `mcw-select` which no longer uses the native select but renders what was previously known as the "enhanced select". See [Material Components](https://material.io/components/web/) for a list of all the changes, and review the [Documentation & Demo](https://pgbross.github.io/vue-material-adapter) for working examples of how to structure the markup for Vue.

## Project Status

This project is under continual development. The long term goal is to allow easy integration with Vue but to allow maximum flexibility in structuring the markup with an emphasis of being as close to the plain `material-components-web` documented structure as feasible. There are helper components defined to aid
simple use, but they can constrain the markup sometimes. As the `material-components-web` library matures the goal is to avoid simplistic helper elements such as those that just add required classes, for example, as they risk needing to understand how to control the helpers when it is in practice simpler to control the underlying markup directly.

Do not hesitate to open an issue on [GitHub](https://github.com/pgbross/vue-material-adapter/issues)

> Each MDCWeb component is mapped to a single vue plugin

### Building and running demo

Install dependencies

```
npm install
```

to build everything

```
npm run build
npm run build:demo
```

to run demo

```
npm run dev
```

### Acknowledgements

This project is based on a fork of the successful [vue-mdc-adapter](https://stasson.github.io/vue-mdc-adapter) project.
