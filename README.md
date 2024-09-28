# My Dashboard App
 
A simple dashboard application built with React that allows users to register, log in, view a list of apps, create, edit, delete apps, and manage their subscription details.

**Table of Contents**
   Features
   Prerequisites
   Installation
   Usage
   Folder Structure
   
**Features**
  User Authentication: Register, log in, and reset passwords.
  App Management: Create, edit, and delete apps.
  Subscription Management: View and update subscription details for each app.
  Dashboard View: List of user's apps in a user-friendly dashboard interface.
  
**Prerequisites**
Before you begin, ensure you have the following software installed on your machine:

  Node.js (v14 or above): Download Node.js
  npm or yarn: Comes with Node.js
  
Installation
Clone the repository: https://github.com/nomanmkhan/my-dashboard-app.git

bash
Copy code
git clone https://github.com/nomanmkhan/my-dashboard-app.git
Navigate to the project directory:

bash
Copy code
cd my-dashboard-app
Install dependencies:

Using npm:

bash
Copy code
npm install
Or using yarn:

bash
Copy code
yarn install
Usage
Start the development server:

Using npm:

bash
Copy code
npm start
Or using yarn:

bash
Copy code
yarn start
Open the app in your browser:

The app should be running on http://localhost:3000. Open the link in your browser to see the application.


Folder Structure
Here is an overview of the project structure:

bash
Copy code
src/
│
├── components/
│   ├── AppItem.js           # Component for displaying individual apps
│   ├── AppList.js           # Component for displaying the list of apps
│   ├── AddAppModal.js       # Modal component for adding and editing apps
│   ├── Loading.js           # Loading spinner component
│   ├── Navbar.js            # Navbar component
│
├── context/
│   └── AppContext.js        # Context for managing app state
│
├── hooks/
│   └── useAuth.js           # Custom hook for authentication
│
├── pages/
│   ├── Dashboard.js         # Dashboard page for managing apps
│   ├── Login.js             # Login page
│   ├── Register.js          # Register page
│   ├── ResetPassword.js     # Password reset page
│
├── App.js                   # Main application file
├── App.css                  # Global styles
└── index.js                 # Entry point of the application


