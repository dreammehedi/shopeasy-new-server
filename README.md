# ShopEasy

## Project Overview

This is the backend service for a Fullstack E-commerce Website built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It handles API requests related to products, including pagination, searching, filtering, and sorting. It also includes Firebase-based authentication.

## Tech Stack

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.

## Features

- **Product Management**: Manage product data including name, image, description, price, category, ratings, and creation date/time.
- **Pagination**: Efficiently load products with server-side pagination.
- **Searching**: Search products by name.
- **Filtering**: Filter products by brand, category, and price range.
- **Sorting**: Sort products by price and date added.

## Setup Instructions

### Prerequisites

- Node.js, Nodemon and npm installed.
- MongoDB installed locally or MongoDB Atlas account.

### Installation

1. Clone the repository:
   ```bash
   git clone <https://github.com/dreammehedi/shopease-server>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables
   - Create a .env file in the root directory.
   - Add the following environment variables
     ```bash
     MONGODB_URI = your mongodb URI
     ```
4. Start the server

   ```bash
   npm run server
   ```

## Contact Information

- **Author:** Md. Mehedi Hassan
- **Email:** dreammehedihassan@gmail.com
- **Portfolio:** https://mehedihassan.vercel.app/
