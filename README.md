![movies (1)](https://github.com/Pilag6/moviesManagementApp/assets/79191808/d549cf27-4300-4d9d-943f-50524035bf5c)

# MERN 🎥 | Full-Stack Movies Management System 🎞️

Welcome to the Full-Stack Movies Management System repository! This project is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and implements CRUD operations for managing movies.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Backend](#backend)
- [Frontend](#frontend)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Movies Management System allows users to perform CRUD operations on movies. It includes a user-friendly interface for managing movie details, such as title, genre, release date, and more. The system is divided into a backend and frontend, making it a full-stack application.

## Features

- Create, Read, Update, and Delete movies
- User-friendly interface
- MERN stack implementation
- Modular project structure

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Pilag6/moviesManagementApp.git
cd moviesManagementApp
```

2. Install dependencies for both the backend and frontend:

```bash
# Install backend dependencies
cd Backend
npm install

# Install frontend dependencies
cd ../Frontend
npm install
```
You can use `pnpm`

3. Configure MongoDB:

   - Create a MongoDB database and update the connection string in `Backend/config/database.js`.

4. Run the application:

```bash
# Start the backend server
cd Backend
npm run server

# Start the frontend application
cd ../Frontend
npm run dev
```
You can use `pnpm`

The application should now be accessible *(of course!)* at `http://localhost:`<img src="https://github.com/Pilag6/moviesManagementApp/assets/79191808/7bf2d4ab-dde9-43dc-9d28-05b9017fca84" width="70"/> 

## Project Structure

The project is organized into two main folders:

- **Backend:** Contains the Express.js server and API for interacting with the MongoDB database.
- **Frontend:** Implements the React.js frontend for user interaction.

## Backend

The backend is built using Express.js and connects to a MongoDB database. It provides RESTful API endpoints for managing movies.

## Frontend

The frontend is built using React.js and allows users to interact with the Movies Management System. It communicates with the backend API to perform CRUD operations.

## Contributing

Feel free to contribute to the project. Fork the repository, make your changes, and submit a pull request. Any contributions are welcome!

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the license terms.
