# Backend Thought Experiment: NestJS CRUD API

This is a simple NestJS application that provides CRUD operations for two entities: `Users` and `WalletAddress`. It interacts with a PostgreSQL database to store and retrieve data.

## Prerequisites

- Node.js (version >=14.x)
- npm (version >=6.x)
- PostgreSQL (version >=12.x)

## Installation

1. Clone this repository: `git clone https://github.com/Cyberverse2/catofff`
2. Navigate to the project directory: `catofff`
3. Install dependencies: `npm install`

## Database Setup

Update the database connection details (DB_URL) in the `.env` file.

## Running the Application

1. Start the NestJS application: `npm run start:dev`
2. The server will start running at `http://localhost:3000`.

## API Endpoints

The following API endpoints are available:

### Users

- `GET /users` - Retrieve a list of all users
- `GET /users/:id` - Retrieve a specific user by ID
- `POST /users/create` - Create a new user
- `PUT /users/:id` - Update an existing user
- `DELETE /users/:id` - Delete a user

### Wallet Addresses

- `GET /walletaddresses` - Retrieve a list of all wallet addresses
- `GET /walletaddresses/:id` - Retrieve a specific wallet address by ID
- `POST /walletaddresses/create` - Create a new wallet address
- `PUT /walletaddresses/:id` - Update an existing wallet address
- `DELETE /walletaddresses/:id` - Delete a wallet address

## Documentation

API documentation is available at `https://documenter.getpostman.com/view/27411559/2sA3QtdWqN` when the application is running.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.
