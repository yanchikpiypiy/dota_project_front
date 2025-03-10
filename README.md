# Dota 2 Web Replica

## Overview
This is a front-end project that replicates the official Dota 2 website, designed to work with the **Dota 2 Heroes API**.

## Built With
- **React.js** - For building the UI

## Features
- Replica of the official Dota 2 website layout and design
- Displays hero details fetched from the API

## Screenshots

![image](https://github.com/user-attachments/assets/413a499b-cc69-46dc-a196-d1cbd28f1f60)
![image](https://github.com/user-attachments/assets/7eb34d81-ca04-49f2-acef-02bfe87208bf)
![image](https://github.com/user-attachments/assets/58f04b7b-b5f2-4bec-baa4-ecfeae1539b3)
![image](https://github.com/user-attachments/assets/14189500-91f4-42e1-a286-acd07808a9b8)



## Installation & Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/yanchikpiypiy/dota_project_front.git
   cd dota_project_front
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the development server:**
   ```sh
   npm start
   ```
   Runs the app in development mode.
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
   The page will reload when you make changes.

## API Integration
This front-end fetches hero data from the [Dota 2 Heroes API](https://github.com/yanchikpiypiy/dota_project_back). Ensure the backend is running and update the API URL in your `.env` file if needed.

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Deployment
To build the project for production, run:
```sh
npm run build
```
Then deploy the contents of the `build/` folder to a static hosting service (e.g., Netlify, Vercel, GitHub Pages).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Advanced Configuration
This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment
This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
