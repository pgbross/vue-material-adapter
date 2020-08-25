# Contributing

To contribute, follow github [fork & pull request](https://guides.github.com/activities/forking/) workflow.

Before engaging to much work, make sure someone is not already working on the same issue on the [Projects pages](https://github.com/pgbross/vue-material-adapter/projects)

## Development Setup

- Porbably best to align on Latest Node

```bash
n latest
```

- If you are on Windows, unit tests require specific [node-canvas](https://github.com/Automattic/node-canvas/wiki/Installation---Windows) pre-requisites install

- Repo is setup to follow conventional git commit with comitizen:

```bash
npm install -g commitizen
```

- get the repo and start the development server

```bash
git clone https://github.com/pgbross/vue-material-adapter
cd vue-material-adapter
npm install
npm run dev
```

## Build Env

### Distribution

```bash
npm run build:dist
```

MDC components are organized in features located in a `packages\<feature>\` folder.

### Demo and Documentation

```bash
npm run build:demo
```

### Tests

```bash
npm run test
```

## Commits

before submitting for review:

- create/update the associated README.md and demo.vue

- run sanity checks

```bash
npm run test
npm run build
npm run lint
```

> linters are setup to follow `recommended` options

- then commit with commitizen

```bash
# commit with
git cz
```

### Coding Rules

> Rules below apply to adapter component source code. For demo site code, follow [vuejs-component-style-guide](https://pablohpsilva.github.io/vuejs-component-style-guide/#/).

The style guide is organized into two types of rules: enforced and recommended.

Enforced rules are designed to reduce bugs and must be followed. Code that does not conform to enforced rules may be rejected.

Recommended rules should be followed to maintain a consistent and readable codebase but failure to do so is not grounds for rejection of a pull request.

## Enforced Rules

All of Vue's official style guide [prority A rules](https://vuejs.org/v2/style-guide/#Priority-A-Rules-Essential-Error-Prevention) are enforced with the exception of [scoped styles](https://vuejs.org/v2/style-guide/#Component-style-scoping-essential). Due to the way that MDC works, some global styles are required.

### Single-File Components

- SFC sections should be only `<template>` and `<script>` with no attributes
- SFC template section in separate file (=> html).
- SFC script section in separate file (=> js)
- SFC should not have a `<style>` section. (build env requirement to avoid issues with sass: stylesheet goes to style.scss)

### Miscellaneous

- When importing foundation from @material/xxx, import from the foundation module instead of pulling the entire package  
  **don't**  
  ~~`import { MDCCheckboxFoundation } from '@material/checkbox'`~~  
  do  
  `import MDCCheckboxFoundation from '@material/checkbox/foundation'`
