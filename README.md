# Fassana (Project Management Tool)

Welcome to the Fassana repository! This project is designed to help you manage and track your projects, tasks, and tickets efficiently, much like popular platforms such as Jira and Asana.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

In a fast-paced world where project management is crucial, our Project Management Tickets System aims to provide a user-friendly and effective platform for organizing, tracking, and managing tasks and projects. Whether you are a developer, manager, or a team lead, this system will help you streamline your workflow and ensure that nothing falls through the cracks.

## Features

Our Project Management Tickets System comes with a variety of features to help you stay on top of your projects:

- **User Authentication**: Secure user registration and login system.
- **Project Management**: Create, edit, and delete projects with details and deadlines.
- **Ticket Creation**: Create tickets, assign them to team members, and set priority.
- **Task Tracking**: Track the progress of tasks, update their status, and add comments.
- **Search and Filtering**: Easily find projects and tickets based on various criteria.
- **Notifications**: Receive notifications for updates and mentions.
- **User Roles**: Define different roles for team members, e.g., admins, developers, and managers.

## Tech Stack

Our system is built using modern technologies for both the frontend and backend:

- **Frontend**: The user interface is developed using [Next.js](https://nextjs.org/), a popular React framework known for its speed and developer experience.
- **Backend**: The server-side logic is powered by [Node.js](https://nodejs.org/) and [Express](https://expressjs.com/), making it robust and scalable.
- **Database**: We are using a non-relational database [MongoDb](https://www.mongodb.com/) to store project and ticket data.
- **Authentication**: Implement secure user authentication with libraries like [Passport](http://www.passportjs.org/).
- **Websockets**: For real-time updates and notifications, we leverage libraries like [Socket.io](https://socket.io/).

## Installation

To set up the Project on your local environment, follow these steps:

1. Clone the repository: 
```bash
 git clone https://github.com/promiseer/Fassana
 ```

2. Navigate to the project directory: 
```bash
cd Fassana
```
3. Install dependencies : 
```bash
 yarn install
```
4. Set up your database and configure the connection in the backend.
5. Start the Developement server:
   
 ```bash
npm run dev
# or
yarn dev
```

Your Project should now be up and running on PORT 3000.

## Usage

1. Open the system in your web browser.
2. Register an account or log in if you already have one.
3. Create projects and add tickets.
4. Assign tasks to team members and track their progress.
5. Enjoy efficient project and task management!

## Contributing

We welcome contributions from the community. If you'd like to enhance the system, fix bugs, or add new features, please follow our [contributing guidelines](CONTRIBUTING.md). We appreciate your help in making this project better.

## License

This Project Management Tickets System is open-source and released under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the license terms.

---

Thank you for choosing the Project Management Tickets System! We hope it proves to be a valuable tool for your project management needs. If you have any questions or feedback, please don't hesitate to get in touch with us. Happy managing!

