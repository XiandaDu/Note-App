# Online Note App
This is a web-based note-taking application developed using Node.js. The front end is built with EJS templating, while Express is utilized for the backend. The application incorporates Passport for authentication and MongoDB with Mongoose for database management.

## Features
User Authentication: Passport.js is employed for user authentication, allowing users to securely register, log in, and log out of their accounts.
Note Management: Users can create, view, update, and delete their notes. Each note can contain various types of content, such as text, images, links, etc.
Data Persistence: MongoDB is used as the database to store user information and notes, ensuring data persistence across sessions.
Responsive Design: The application is designed to be responsive, providing a seamless experience across different devices and screen sizes.

## Installation
Clone the repository:

```bash
git clone https://github.com/your/repository.git
```
Install dependencies:

```bash
cd your_project_directory
npm install
```

Set up environment variables:
Create a .env file in the root directory and define the following variables:

```plaintext
PORT=3000 (optional)
MONGODB_URI=your_mongodb_uri
GOOGLE_CLIENT_ID=client_id
GOOGLE_CLIENT_SECRET=client_secret
GOOGLE_CALLBACK_URL=callback_url
```
Start the server:

```bash
npm start
```
Access the application at http://localhost:3000 in your web browser.

## Dependencies
Express: Minimalist web framework for Node.js.

EJS: Embedded JavaScript templates for generating HTML markup.

Passport: Authentication middleware for Node.js.

MongoDB: NoSQL database for storing user data and notes.

Mongoose: MongoDB object modeling for Node.js.

## Usage
Register for an account or log in if you already have one.
Once logged in, you can create, view, edit, and delete your notes.
Log out when you're done using the application.

## Contributing
Contributions are welcome! Please feel free to submit issues or pull requests.

## Improvements in the future
1. Search results layout change
2. Add Frequent Q&A
3. Add about
4. Add Features

## License
This project is licensed under the MIT License.