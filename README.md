# React-Project

# Objective    
The purpose of this repo is research and development with ReactJS. 

# Environement and Preparation used for this event   
These are the tools used to conduct this research and development. 

## Hardware
* Macbook - MacOS Ventura 13.4.2

## Software
* VS Code - Version: 1.82.0-insider (Note: all references to the command line refer to the VSCode command line unless otherwise noted) (Optional)
* ReactJS - Version 18.2.0
* NodeJS - Version 18.7.1
* NPM - Version 9.6.7

# Setup
## Install Node.js and NPM (Node Package Manager)
1. To install Node.js and NPM which are required for React, visit - https://nodejs.org/en/download and follow the instructions for using the .pkg file in your Downloads folder to run the installer.   

## Verify Node and NPM are installed
1. Confirm installation with ‘node -v’ and ‘npm -v at the command line.   
    **Note:** Node and NPM are required or the following steps will not work!

# Create the React App (See the alternative installation with Vite for a faster installation)
1. Create a directory for your app. E.g "your-app".   
2. Navigate into the directory using 'cd "your-app"'.   
   **Note:** At any time you can verify that you are in the correct directory using 'pwd' at the command.   
3. Create a React project using the command 'npx create-react-app your-app'.   
   **Note:** The installation may take some time. Also, note that a large number of files that are not required will be created by default when this method is used.   

## Verify that the project was created   
1. Use the command 'npm start'.   
2. A browser window should open - to the path http://localhost:3000 in the url field displaying the React logo and a link named "Learn React". If not, then repeat the steps carefully.   
3. React is installed and working properly.     
   **Note:** A large number of files that are not required will be created by default when this method is used.[Vite offers an alternative smaller installation](#alternative-installation-with-vite)   

## Alternative project creation with Vite
1. Follow the above instructions for [Install Node.js and NPM (Node Package Manager)](#create-the-react-app-see-the-alternative-installation-with-vite-for-a-faster-installation).    
2. To install Vite, use 'npm create vite@latest' at the command line.   
3. Select "React" --> "Javascript + SWC" (SWC is also a transpiler for JavaScript, it is written in Rust and is much faster than Babel.)   
4. The installation should be completed in seconds.   
5. Make sure that you are in the project directory then run 'npm install', then 'npm run dev'.   

# Optional 
The following content was created as a standard result of using ‘npx create-react-app my-app’ command and isn't a required read. 
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
