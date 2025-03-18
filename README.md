# vue-learn-one

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```


# UX Interview Exercise

This project contains a single HTML file that contains styling and JS from our application. It's been stripped of any 
real functionality - not much is going to work!

The central content section contains two inputs hooked up to a calendar widget. This uses a very old version of 
`bootstrap-datetimepicker`. We would like you to replace these with a more modern control using an open source library 
of your choice.

* The functionality and appearance should be similar to the existing calendar. It doesn't matter if it is not identical,
  but our users don't like change, so we want it fitting in with the rest of layout.
* The existing calendar support multiple date formats, based on the user's locale. It submits the selected date as UTC, 
  in the format `Y-m-d H:i:s`, regardless of the user's time zone. The new widget should do the same.
* Include scripts such as `yarn.lock`, `webpack.config.js`, etc required to minify and bundle new code.
* Include instructions on building / bundling the new code (you can add them to the bottom of the README.md or as a 
  separate file)
* Zip up the project and send it back to us.

The existing system is using RequireJS for loading dependencies. If this interferes with your changes, feel free to 
strip it out - we will only be looking at your changes. The CSS is based on Bootstrap 3. If possible, leave the existing
styling in place, just adding whatever your changes require.

Thank you for taking the time with this!

---
## Setup Instructions

Follow these steps to set up the project on your local machine:

### Prerequisites

Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- [Yarn](https://yarnpkg.com/) (version 1.x or higher)

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
