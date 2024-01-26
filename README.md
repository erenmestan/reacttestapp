# React Task Manager

This project is a React application that allows you to create tasks on a single screen, edit and delete tasks.

## Installation

After cloning or downloading the project, follow these steps to install dependencies:

1. Open your terminal and navigate to the project directory.

2. Run the following command to install the required packages:

    ```
    npm install
    ```

3. To install the JSON Server package, run the following command:

    ```
    npm install -g json-server
    ```

4. Start the JSON Server by running the following command:

    ```
    json-server --watch db.json --port 3004
    ```

5. Start the React application by running the following command:

    ```
    npm start
    ```

6. You can view the application by going to `http://localhost:3000` in your browser.

## JSON Server Usage

This project provides a simple API simulation using JSON Server. JSON Server offers a RESTful API based on the `db.json` file. You can read, write, update, and delete data in this file. When the JSON Server is started, an API server is launched at `http://localhost:3004`.

For example, you can send an HTTP GET request to `http://localhost:3004/posts` to retrieve all "posts" records.

For more information, refer to the JSON Server documentation: [JSON Server Documentation](https://github.com/typicode/json-server)

## Contributions

Contributions are welcome! If you find a bug or have any suggestions, please open an issue or submit a pull request.
