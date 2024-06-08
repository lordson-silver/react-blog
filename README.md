# React Blog Project Documentation

This project is a simple blogging platform built with React. It demonstrates the use of hooks, routing with `react-router-dom`, and a mock backend with `json-server`. Users can create, read, and delete blog posts.

## Getting Started

### Prerequisites

Ensure you have Node.js installed on your machine. Download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/lordson-silver/react-blog.git
   ```

2. Navigate to the project directory:

   ```sh
   cd react-blog
   ```

3. Install the dependencies:
   ```sh
   npm install
   ```

### Running the Application

1. Start the `json-server` for the backend:

   ```sh
   npx json-server data/db.json -p 5000
   ```

   This will start the server at `http://localhost:5000`.

2. Start the React development server:
   ```sh
   npm start
   ```
   The application will open in your default web browser at `http://localhost:3000`.

### Environment Variables

Create a `.env` file at the root of your project with the following content:

```
REACT_APP_API_URL=http://localhost:5000/blogs/
```

This ensures that your application points to the correct backend URL.

## Project Structure

The project is structured as follows:

- `src`
  - `components`
    - [`BlogList`](src/BlogList.jsx)
    - [`Create`](src/Create.jsx)
    - [`Nome`](src/Home.jsx)
    - [`NavBar`](src/Navbar.jsx)
  - `pages`
    - [`BlogDetails`](src/BlogDetails.jsx)
    - [`NotFound`](src/NotFound.jsx)
  - `hooks`
    - [`useFetch`](src/useFetch.jsx)
  - [`App`](src/App.jsx)
  - [`index`](src/index.jsx)

## Components

### Navbar.js

Provides navigation links to the home page and the create blog page.

### Home.js

Fetches and displays a list of all blog posts using the `useFetch` custom hook.

### BlogList.js

Displays a list of blog posts with links to their detailed view.

### BlogDetails.js

Fetches and displays the details of a specific blog post using the `useParams` hook to get the blog ID from the URL. It includes a delete function to remove the blog post and redirect to the home page.

### Create.js

Provides a form to create a new blog post. Uses `useState` to manage form input values and `useHistory` to redirect after a successful post creation. Handles form submission, sends a POST request to the API, and manages loading state.

### NotFound.js

Displays a message for any unmatched routes, providing a link back to the home page.

## Custom Hook

### useFetch.js

A custom hook that fetches data from a specified URL and manages loading, error, and data states. It uses the `useEffect` hook to handle the fetch lifecycle, including cleanup on component unmount.

## Main Application

### App.js

Sets up the main structure of the application using `react-router-dom` for routing. It includes routes for the home page, create blog page, blog details page, and a not found page.

### index.js

The entry point of the React application. It renders the `App` component inside a `div` with the ID of `root`.

## Conclusion

This project serves as a practical example of how to build a simple blog application using React, React Router, and a mock backend with `json-server`. It demonstrates the use of React hooks for managing state and effects, as well as custom hooks for data fetching.

Feel free to explore the code, experiment with new features, and customize it according to your needs.

I had fun building this.

### License
MIT License

(c) Lordson Silver 
