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

==========================================
TEST ONLY
==========================================

## Setup Instructions

Follow these steps to set up the project on your local machine:

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (version 14 or higher recommended)
- Yarn (version 1.x or higher)
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Dependencies

- Flatpickr v4.6.13
- Webpack v5.98.0

### Installation

1. Download the zip and extract the zipped file to your local machine:

2. Install the project dependencies using yarn:
   ```sh
   yarn install
   ```

### Building the Project

The project uses webpack to bundle the JavaScript and CSS files. To build the project:

1. Run the following command:
   ```sh
   yarn build
   ```
2. The bundled files will be output to the dist/ directory.

### Running the Project

1. Open the index.html file in your browser to view the application. You can also use the Visual Studio Code Live Server Extension to run it.

### Implementation Notes

1. Replaced bootstrap-datetimepicker with Flatpickr v4.6.13:
   - Maintains locale-based date formatting
   - Preserves UTC date submission in Y-m-d H:i:s format
   - Improved accessibility and mobile support
2. Build System Updates:

   - Added webpack for modern bundling
   - Configured babel for better browser compatibility
   - Added CSS and style loaders for proper styling integration

3. Modified Files:
   - js/form/calendar.js: Main datepicker implementation
   - system.js: Updated module loading
   - webpack.config.js: Build configuration
   - package.json: Updated dependencies

# UI Project

A modern web application built with vanilla JavaScript and webpack.

## Features

- Modern JavaScript bundling with webpack
- Development server with hot reloading
- Flatpickr date picker integration
- Responsive design
- Modular architecture

## Prerequisites

- Node.js (v14 or higher)
- Yarn package manager

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd claritum-ui-interview
```

2. Install dependencies:

```bash
yarn install
```

## Development

To start the development server:

```bash
yarn start
```

This will:

- Start a development server on port 3000
- Open your browser automatically
- Enable hot reloading for instant updates
- Serve your bundled JavaScript files

## Available Scripts

- `yarn start`: Start development server and open browser
- `yarn dev`: Start development server without opening browser
- `yarn prod`: Build for production
- `yarn build`: Build the project

## Project Structure

```
├── dist/               # Production build files
│   └── bundle.js      # Bundled JavaScript
├── js/                # Source JavaScript files
│   ├── system.js      # Main entry point
│   ├── config.js      # Configuration
│   └── vendor/        # Third-party libraries
├── css/               # Stylesheets
├── images/            # Image assets
├── index.html         # Main HTML file
├── package.json       # Project dependencies
└── webpack.config.js  # Webpack configuration
```

## Build Configuration

The project uses webpack for bundling with the following features:

- Babel for modern JavaScript support
- CSS processing with style-loader and css-loader
- Development server with hot reloading
- Production optimization
- Source maps for debugging

## Dependencies

### Production

- flatpickr: ^4.6.13 (Date picker library)

### Development

- webpack: ^5.98.0
- webpack-cli: ^6.0.1
- webpack-dev-server: ^4.15.1
- @babel/core: ^7.26.10
- @babel/preset-env: ^7.26.9
- babel-loader: ^10.0.0
- css-loader: ^7.1.2
- style-loader: ^4.0.0

## Browser Support

The application is tested and supported on:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
