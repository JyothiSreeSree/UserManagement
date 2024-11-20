
This is a React-based User Management Application that allows users to view, add, edit, and delete user details. It also includes pagination to handle large datasets and make the user interface more efficient.

## Features

- View Users: Displays a list of users fetched from an API.
- Add User: Allows the user to add new users to the list.
- Edit User: Provides an option to edit existing user details.
- Delete User: Users can be deleted from the list.

## Technologies Used

- React: JavaScript library for building user interfaces.
- React Context: Used to manage global state for users.
- React Router: Used for navigation between components.
- CSS: For styling the components and making the UI responsive.
- JSONPlaceholder: Fake API used to simulate fetching user data.

## Installation

To get started with this project, follow the steps below:
1.npm install //installing dependencies.
2.npm run start // to start



=> Viewing Users

- Upon loading the app, you will see a list of users with their name and email.
- You can paginate through the user list, with 5 users displayed per page.

=> Adding a User

- Click on the "Add User" button to open a form where you can enter details like `First Name`, `Last Name`, `Email`, and `Department`.
- After submitting, the user will be added to the list.

=> Editing a User

- Click on the "Edit" button next to any user's name to modify their details.
- You can update the user's name, email, and department.
  
=> Deleting a User

- Click on the "Delete" button next to any user's details to remove them from the list.


*** Future Improvements
-implementing pagination for displaying users details.
- Implement user authentication (login/logout).


