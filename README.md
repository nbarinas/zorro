# Study Validation App

## Overview
The Study Validation App allows users to verify if a person has completed a study with our organization by searching for their ID or phone number. The application includes a secure login feature to ensure that only authorized users can access the search functionality.

## Project Structure
```
study-validation-app
├── src
│   ├── index.html          # Main entry point of the application
│   ├── login.html          # Login form for user authentication
│   ├── search.html         # Search interface for validating study completion
│   ├── js
│   │   ├── app.js          # Main application logic
│   │   ├── login.js        # Login functionality
│   │   └── search.js       # Search functionality
│   ├── css
│   │   ├── styles.css      # General styles for the application
│   │   └── login.css       # Styles specific to the login page
│   └── data
│       └── database.json   # JSON database containing user information and study records
├── package.json            # Configuration file for npm
└── README.md               # Documentation for the project
```

## Setup Instructions
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies using npm:
   ```
   npm install
   ```
4. Open `src/index.html` in your web browser to access the application.

## Usage Guidelines
- To access the search functionality, users must first log in using their username and password on the `login.html` page.
- After successful login, users can navigate to the `search.html` page to enter a person's ID or phone number for validation.
- The application will fetch data from the `database.json` file to check the study completion status.

## Contributing
Contributions to the Study Validation App are welcome. Please submit a pull request or open an issue for any suggestions or improvements.