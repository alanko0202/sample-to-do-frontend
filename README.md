# To-Do List Frontend

This is the frontend for the To-Do List application, built using React and TypeScript. The frontend allows users to interact with the to-do list by reading, creating, updating, and deleting duties.


## Table of Contents
- [To-Do List Frontend](#to-do-list-frontend)
  - [Table of Contents](#table-of-contents)
  - [Technology Stack](#technology-stack)
  - [Prerequisites](#prerequisites)
  - [Running the Application](#running-the-application)
    - [Configuration](#configuration)
  - [Screenshots](#screenshots)

## Technology Stack
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static types.
- **Ant Design**: UI component library for React.
- **React-hook-form**: Library for managing form state and validation.
- **React-query**: Library for data fetching, caching, and synchronization.
- **Styled-components**: Library for styling React components.
- **Jest**: Testing framework for JavaScript.
- **Docker**: Containerization platform.

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v18.x)
- Docker
- Docker Compose

## Running the Application

### Configuration
- Edit the configuration in docker-compose.yaml if necessary


Build and start the Docker containers using Docker Compose:
```
docker compose up --build
```


The frontend application interacts with the backend API at http://localhost:8080/duties. Ensure the backend server is running before using the frontend application.

After starting both the backend and frontend servers, open your browser and navigate to http://localhost:3000 to use the To-Do List application.


## Screenshots

[![Screenshot-2.png](https://i.postimg.cc/FKdgfz0C/Screenshot-2.png)](https://postimg.cc/sBzZqV65)

[![Screenshot-1.png](https://i.postimg.cc/5N4BBnwC/Screenshot-1.png)](https://postimg.cc/Cd2nYCrh)

