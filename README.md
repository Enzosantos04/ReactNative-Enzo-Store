# Project Store using Routes - React Native

A Project Store developed using React Native. This project features dynamic content with data imported from a `index.ts` file, styled and organized through components defined in `components.tsx`, The main feature of this project is the use of routes to navigate between multiple screens. It includes a 'services' folder to store functions for fetching data from `index.ts`. Additionally, the project has a dedicated section for retrieving products divided by categories
## Features

- **FlatList** used for efficiently displaying data.
- Use of **React Native** components and styling.
- Modular components and props-based design for flexibility.
- Use of **expo-router** to navigate between screens, tabs, stack.

# Prerequisites

Make sure you have the following installed:

- **Node.js**: [Download here](https://nodejs.org/)
- **npm**: Node.js comes with npm.
- **Expo CLI**: Install Expo CLI globally using npm:
  ```bash
  npm install -g expo-cli
  
## Running the Project
To run the project using Expo:

1. **Start the Expo development server**:
   ```bash
   npx expo start
 2. After running this command, Expo will open a web page with a QR code. Scan this QR code using the Expo Go app on your mobile device to view the project live.

 Expo Go is available for both iOS and Android in their respective app stores.

## Project Structure
- **index.tsx**: The `index.tsx` file serves as the main entry point for the app. This section features a welcoming screen with a button that navigates to `home.tsx`, where the app's main content is displayed.
- **index.ts**: Contains the data to be displayed in the app.
- **components.tsx**: Defines the components, props, and styles used to structure and style the content.
- **service-folder**: It stores the functions to collect data from `index.ts`.
