# TV-maze-website

TV maze website that displays the movies per genre build in Vue 3. The demo is available here: <https://demo.martijnfl.nl>

## Author

[Martijn Fleurkens](mailto:martijnfleurkens@gmail.com)

## Table of Contents

- [🔨 Setting up development environment](#🔨-setting-up-development-environment)
  - [Configure Visual Studio Code](#configure-visual-studio-code)
  - [Browser devtools](#browser-devtools)
- [🎬 Getting Started](#🎬-getting-started)
- [📚 Libraries](#📚-libraries)
- [📃 Explanations](#📃-explanations)

## 🔨 Setting up development environment

### Configure Visual Studio Code

Install extensions:

| Tool         | link                                                                            |
| ------------ | ------------------------------------------------------------------------------- |
| Vetur        | <https://marketplace.visualstudio.com/items?itemName=octref.vetur>              |
| EditorConfig | <https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig> |
| Vue Volar    | <https://marketplace.visualstudio.com/items?itemName=Vue.volar>                 |
| Eslint       | <https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint>    |
| Prettier     | <https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>    |

### Browser devtools

Install extensions:

| Tool         | link                                    |
| ------------ | --------------------------------------- |
| vue-devtools | <https://github.com/vuejs/vue-devtools> |

## 🎬 Getting Started

1. Clone the latest source from the repository

   ```sh
   git clone https://github.com/martijnfleurkens/TV-maze-website
   cd TV-maze-website
   ```

2. Install the packages

   ```sh
   npm install
   ```

3. Compiles and hot-reloads development environment

   ```sh
   npm run dev
   ```

### Compiles and minifies for production

```
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lints and fixes files [ESLint](https://eslint.org/)

```
npm run lint
```

## 📚 Libraries: (external link)

- [Vue.js](https://vuejs.org/)

## 📃 Explanations

### Vue.js

The choice for Vue.js has been made because of its lightweight framework that is fast and efficient. The possibility to start with a minimal setup made it perfect to create this project within the limited timeframe. As well that the component-based system and flexibility from Vue.js does make it possible to easily expand this project in the feature. Plus it gives the user a great experience because Vue.js is reactive, this way it’s easy to build a real-time application.
Lastly most of my experience with component based frameworks is with Vue.js so it was the best possibility to create this project within the set time.

### Vitest

Vitest is a newer testing framework which connects perfectly to Vue.js because it both runs on development environment Vite and is integrated well. This makes it possible to focus on writing good and high coverage tests and makes it possible to focus less on configuration. Which is perfect in this case because this is a small project. Another benefit is that Vitest is fast compared to similar testing tools. Lastly Vitest is really similar to Jest which a big number of people in the industry use. For the future that would mean it is easy to expand this project and find people who can work with these testing utilities.
