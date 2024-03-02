# RainOrShine

RainOrShine is a dynamic weather application designed to provide users with the latest weather updates for any location of their choosing. Built with ReactJS, HTML, CSS (utilizing both Grid and Flexbox), and SASS, this application offers a sleek, user-friendly interface that's responsive and accessible on all devices. Hosted on AWS S3, RainOrShine leverages the [OpenWeatherMap API](https://openweathermap.org/) to deliver real-time weather data, including current conditions, forecasts, air quality indexes, and more.

## Features

- **Consume API from OpenWeatherMap API**: Fetch and display real-time weather data.
- **Current Weather Conditions**: Users can search for and view the weather in their chosen location.
- **Weather Forecast**: Offers both a 24-hour outlook for a selected day and a default 7-day forecast.
- **Change Weather Location**: Easily search for and switch to different cities to view their weather conditions.
- **Air Quality Index (AQI)**: Displayed in a dedicated sidebar, providing vital health information.
- **Sunset and Sunrise Times**: Also shown in the sidebar, helping users plan their day.
- **Detailed Weather Descriptions**: Comprehensive details about the current weather conditions.
- **Responsive Design**: Fully responsive layout for an optimal viewing experience on mobile devices.
- **Light and Dark Mode**: Users can switch between themes for their viewing preference.
- **Animations with CSS**: Enhances user experience with smooth transitions and animations.
- **Accessibility**: Ensures accessibility for users with disabilities.

## Technologies

- **ReactJS**
- **HTML**
- **CSS (Grid & Flexbox)**
- **SASS**
- **AWS S3**

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This project requires Node.js and npm to run. Visit [Node.js](https://nodejs.org) to download and install them on your machine.

### Installation

1. Clone the repo
  ```bash
  git clone https://github.com/EJ-Lan/RainOrShine.git
  ```

2. Navigate to the project directory
  ```bash
  cd rain-or-shine
  ```

3. Install NPM packages
  ```bash
  npm install
  ```

4. Start the deployment server
```bash
npm start
```

This will run the app in development mode. Open http://localhost:3000 to view it in the browser.

### Deployment

This application is deployed on AWS S3.

## Workflow

A workflow is included for running tests and deploying app to S3 bucket.
