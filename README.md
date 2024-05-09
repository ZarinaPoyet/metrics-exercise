# Metrics Management

This project is a full-stack web application designed for managing and visualizing metrics over time. The backend is implemented with Node.js and Express, utilizing MongoDB for persistent data storage. The frontend is developed using React, providing a dynamic and interactive user interface to display data using charts.

## Key Features

- **Metric Management**: Users can add and view metrics dynamically through a user-friendly interface
- **Data Visualization**: Metrics are visualized with averages over various intervals (minute, hour, day) using line charts
- **Responsive Design**: The interface adjusts to different screen sizes and orientations, ensuring a good user experience on a variety of devices
- **RESTful API**: The server provides a simple and scalable API for creating and retrieving metric data

## Technology Stack

- **Backend**
  - **Node.js** and **Express**: Used for creating the server
  - **Mongoose**: Provides a straight-forward schema-based solution to model application data with MongoDB
  - **CORS**: Allows the server to accept cross-origin requests
  - **Dotenv**: Manages environment variables
- **Frontend**
  - **React**: Used for building the user interface
  - **Axios**: Facilitates HTTP requests to the backend server
  - **Recharts**: Used for rendering charts
  - **Moment.js**: Helps in formatting and manipulating dates

## Installation and Setup

### Prerequisites

- **Node.js** and **npm** should be installed on your machine.
- A **MongoDB** instance should be running and accessible.

### Configure environment variables

- Create a `.env` file in client folder and server folder
- Refer to the `.env.example` file in each folder
- Add your configs

### Backend Setup

```
cd server
npm install
npm start
```

### Frontend Setup

```
cd client
npm install
npm start
```
