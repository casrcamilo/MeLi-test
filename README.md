# MeLi-test App

Welcome to my App! This project is a web application developed as part of a test for Mercado Libre's frontend developer position.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the API](#running-the-api)
- [Running the App](#running-the-app)
- [Libraries Used](#libraries-used)
- [Architecture](#api-architecture-overview)
- [License](#license)

## Prerequisites
Before you begin, ensure you have met the following requirements:
- [Node.js](https://nodejs.org/) installed v16 or above
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) package manager installed
- [Git](https://git-scm.com/) installed

## Installation
To get started with the project, follow these steps:

1. Clone the repository to your local machine:

```git clone https://github.com/casrcamilo/MeLi-test.git```

2. Change to the project directory:

```cd MeLi-test```

## Running the API
1. change to the api directory:

```cd api```

2. install dependencies

```npm install```

3. run the development enviroment

```npm run dev```

## Running the App
To run the React app locally, use the following steps:

1. change to the app directory:

```cd app```

2. install dependencies

```npm install```

3. Start the development server:

```npm start```

## Libraries Used
This project makes use of the following libraries and frameworks:

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [React Router DOM](https://reactrouter.com/): Declarative routing for React.
- [Material-UI](https://mui.com/): A popular React UI framework that provides pre-built components with a Material Design look and feel.
- [axios](https://axios-http.com/): A promise-based HTTP client for making requests to the API.
- [Sass](https://sass-lang.com/): A CSS preprocessor that enhances CSS with features like variables and nesting.

# API Architecture Overview

The API architecture follows a structured pattern with routes, controllers, and services to handle various endpoints and business logic.
- Routes: Routes define the endpoints and their associated HTTP methods. They are responsible for routing incoming requests to the appropriate controller functions based on the URL and HTTP verb.
- Controllers: Controllers handle the request and response logic. They interact with the services to perform CRUD (Create, Read, Update, Delete) operations on the data.
- Services: Services contain the business logic and interact with the database or data source. They encapsulate the operations related to data retrieval, manipulation, and validation.

## License
This project is licensed under the [MIT License](LICENSE).