# filmnerds

A full-stack authentication-based application built with Node.js, Express, Passport.js, and PostgreSQL. This project allows users to create posts in a private clubhouse, where only authenticated members can view the entirety of messages.

The application focuses on user authentication, role-based access control, and secure data handling, demonstrating how different permission levels affect what users can see and do.

## Live Demo

https://members-only-0p5x.onrender.com/

---

## Project Overview

This application models a private messaging clubhouse. Users can create posts that are partially visible to authenticated non-members, encouraging them to gain membership.

The system includes three levels of access:

- Non-logged-in users cannot access the site
- Guests (logged in but non-member) can view partial messages
- Members can view entire messages along with author names and timestamps and create their own messages
- Admins have full access, including the ability to delete messages and reset the database

---

## Features

- User authentication with login and signup
- Password hashing using bcrypt
- Form validation and sanitization
- Session-based authentication with Passport.js
- Create and view messages
- Membership system via site themed quiz
- Role-based access control (guest, member, admin)
- Conditional UI rendering based on permissions
- Admin-only message deletion
- Protected routes for sensitive actions

---

## Tech Stack

- Node.js
- Express
- PostgreSQL
- EJS (templating)
- Passport.js
- bcrypt
- CSS

---

## Architecture

The project follows an MVC-style structure:

### Controllers

- admin
- member
- auth
- message
- register

### Routes

- index
- admin
- member
- auth
- message
- register

### Database Layer

- SQL models for users and messages
- Database connection and query handling

### Views

- EJS templates organized by feature
- Reusable partials for layout and navigation

---

## Database Schema

### Users

- id (Primary Key)
- username
- password (hashed)
- is_member (boolean)
- is_admin (boolean)

### Messages

- id (Primary Key)
- title
- text
- created_at
- user_id (Foreign Key)

### Relationships

- A user can create many messages
- A message belongs to one user

---

## Key Implementation Details

- Passwords are hashed using bcrypt before storage
- Authentication handled with Passport.js local strategy
- Session management for persistent login state
- Role-based middleware restricts access to routes
- Conditional rendering in EJS based on user role
- Server-side validation ensures clean and secure input
- Protected POST routes for creating and deleting messages
- Membership status updated via themed quiz
- Admin privileges controlled via boolean flag

---

## Routes

### Index

- GET / → Render homepage with all messages

### Auth

- GET /register → Register form
- POST /register → Create new user
- GET /login → Login form
- POST /login → Authenticate user
- POST /logout → Logout user

### Membership

- GET /register/member → Member register form
- POST /register/member → Update user to member

### Messages

- GET /new-message → New message form (logged-in members only)
- POST /new-message → Create message
- POST /messages-delete → Delete message (admin only)

---

## Installation and Setup

### Clone the repository

```bash
git clone https://github.com/joshuaGmartin/members-only
cd members-only
```

### Install dependencies

```bash
npm install
```

### Set up PostgreSQL database

- Create a new database

### Create a .env file

```env
DATABASE_URL=your_database_url
SESSION_SECRET=your_secret
```

### Start the server

```bash
npm start
```

Open in browser:  
http://localhost:3000

---

## Design Decisions

- Role-based access control to demonstrate real-world permission systems
- Separation of authentication and business logic via controllers
- Server-rendered views for simplicity and clarity
- Use of sessions
- Minimal UI to emphasize backend logic and security

---

## Skills Employed

- Implementing authentication with Passport.js
- Securing user data with bcrypt
- Designing relational database schemas
- Building role-based authorization systems
- Structuring an Express app using MVC principles
- Handling form validation and sanitization
- Managing sessions and protected routes

---

## Acknowledgements

- The Odin Project
