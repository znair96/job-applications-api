# 🚀 Job Tracker API

A beginner-friendly **RESTful backend application** built with **Node.js, Express.js, PostgreSQL, and Drizzle ORM**.

The goal of this project is to build a strong foundation in backend development by understanding how **routes, controllers, models/schema, ORM, middleware, REST APIs, and databases** work together.

---

## 🎯 Project Objective

Build a backend API that allows users to manage their job applications.

The application should allow you to:

- Create a job application
- View all applications
- View a single application
- Update an application
- Delete an application
- Filter applications
- Search applications
- Validate incoming data
- Handle errors consistently

### Core Architecture

```text
Client
   ↓
Route
   ↓
Controller
   ↓
Drizzle ORM
   ↓
PostgreSQL
   ↓
Response
```

---

# 🛠️ Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Drizzle ORM
- Drizzle Kit
- JavaScript
- Postman / Thunder Client
- dotenv
- nodemon

---

# 📁 Project Structure

The final project should follow this structure:

```text
job-tracker-api/
│
├── src/
│   ├── controllers/
│   │   └── applicationController.js
│   │
│   ├── db/
│   │   ├── index.js
│   │   └── schema.js
│   │
│   ├── routes/
│   │   └── applicationRoutes.js
│   │
│   ├── middleware/
│   │   └── errorMiddleware.js
│   │
│   └── app.js
│
├── drizzle/
│   └── migrations/
│
├── .env
├── .gitignore
├── drizzle.config.js
├── package.json
└── server.js
```

---

# 📚 Learning Objectives

By completing this project, you should understand:

- [ ] How an Express server works
- [ ] How to create routes
- [ ] HTTP methods
- [ ] Route parameters
- [ ] Query parameters
- [ ] Controllers
- [ ] Database schemas
- [ ] Drizzle ORM
- [ ] PostgreSQL
- [ ] CRUD operations
- [ ] Database queries
- [ ] Database migrations
- [ ] Middleware
- [ ] Error handling
- [ ] HTTP status codes
- [ ] Environment variables
- [ ] API validation
- [ ] REST API design
- [ ] Basic relational database concepts

---

# 🏁 Phase 1 — Express Server Setup

## Task 1: Initialize the Project

Create a new Node.js project.

Install Express:

```bash
npm install express
```

Install development dependencies:

```bash
npm install -D nodemon
```

---

## Task 2: Create the Express Server

Create:

```text
server.js
```

The server should:

- Initialize Express
- Start listening on a port
- Display a message when the server starts

Example:

```text
Server running on port 5000
```

### Success Criteria

- [ ] Server starts successfully
- [ ] No errors in terminal
- [ ] Server listens on port `5000`

---

# 🏁 Phase 2 — First Route

## Task 3: Create a Health Check Route

Create:

```http
GET /
```

Expected response:

```json
{
  "message": "Job Tracker API is running"
}
```

### Concepts to Learn

- `app.get()`
- `req`
- `res`
- `res.json()`
- HTTP GET

### Success Criteria

- [ ] `GET /` works
- [ ] Response is JSON
- [ ] Correct status code is returned

---

# 🏁 Phase 3 — Application Routes

Create:

```text
src/routes/applicationRoutes.js
```

Your API should eventually contain:

```text
GET     /api/applications
GET     /api/applications/:id
POST    /api/applications
PUT     /api/applications/:id
DELETE  /api/applications/:id
```

---

## Task 4: Understand Routes

Before implementing the logic, understand:

```text
Route
  ↓
Controller Function
```

For example:

```text
POST /api/applications
        ↓
createApplication()
```

### Questions to Answer

- What is a route?
- What is an HTTP method?
- What is a route parameter?
- What is the difference between `/applications` and `/applications/:id`?
- Why should business logic not be placed directly inside every route?

---

# 🏁 Phase 4 — Controllers

Create:

```text
src/controllers/applicationController.js
```

Create the following controller functions:

```text
getApplications()
getApplication()
createApplication()
updateApplication()
deleteApplication()
```

---

## Controller Responsibilities

### `getApplications()`

Retrieve all applications from PostgreSQL using Drizzle.

### `getApplication()`

Retrieve a single application based on its ID.

### `createApplication()`

Insert a new application into the database.

### `updateApplication()`

Update an existing application.

### `deleteApplication()`

Delete an existing application.

---

## Important Concept

Understand this distinction:

### Route

> Which function should handle this request?

### Controller

> What should happen when this request arrives?

### Drizzle

> How should the application communicate with PostgreSQL?

---

# 🏁 Phase 5 — PostgreSQL & Drizzle ORM

Install PostgreSQL and Drizzle dependencies.

For example:

```bash
npm install drizzle-orm pg dotenv
```

Install Drizzle Kit:

```bash
npm install -D drizzle-kit
```

---

## Task 5: Configure PostgreSQL

Create:

```text
src/db/index.js
```

Create:

```text
src/db/schema.js
```

Create:

```text
drizzle.config.js
```

Create:

```text
.env
```

Add your database connection string:

```env
PORT=5000
DATABASE_URL=postgresql://username:password@localhost:5432/job_tracker
```

### Important

Do **not** commit `.env` to GitHub.

Add:

```text
.env
```

to:

```text
.gitignore
```

---

# 🏁 Phase 6 — Create the Database Schema

Instead of using Mongoose models, define your database schema using **Drizzle**.

Create:

```text
src/db/schema.js
```

Create an `applications` table.

The table should contain:

```text
id
company
position
location
status
jobType
salary
appliedDate
notes
createdAt
updatedAt
```

Conceptually:

```text
applications
│
├── id
├── company
├── position
├── location
├── status
├── jobType
├── salary
├── appliedDate
├── notes
├── createdAt
└── updatedAt
```

---

## Status

The `status` field should only accept:

```text
Applied
Interview
Technical Round
HR Round
Offer
Rejected
Withdrawn
```

---

## Job Type

The `jobType` field should only accept:

```text
Full-time
Part-time
Contract
Internship
```

---

## Validation

Add appropriate database/schema validation for:

- [ ] Required fields
- [ ] String fields
- [ ] Number fields
- [ ] Status values
- [ ] Job type values
- [ ] Dates

---

# 🏁 Phase 7 — Database Migrations

Learn how Drizzle manages database schema changes.

Add appropriate scripts to `package.json`.

For example:

```text
db:generate
db:migrate
db:studio
```

Your workflow should conceptually be:

```text
schema.js
    ↓
Drizzle Kit
    ↓
Migration
    ↓
PostgreSQL
```

### Your Tasks

- [ ] Create the applications table
- [ ] Generate a migration
- [ ] Run the migration
- [ ] Verify the table exists in PostgreSQL
- [ ] Understand what the generated migration does

---

# 🏁 Phase 8 — Database Connection

Create:

```text
src/db/index.js
```

Initialize the PostgreSQL connection and Drizzle instance.

Your application should be able to perform:

```text
Express
   ↓
Controller
   ↓
Drizzle
   ↓
PostgreSQL
```

### Questions to Answer

- What is a database connection?
- What is a connection pool?
- What is Drizzle?
- What does an ORM do?
- Why do we need Drizzle if PostgreSQL already supports SQL?
- What is the difference between Drizzle ORM and Drizzle Kit?

---

# 🏁 Phase 9 — Create Application

## Task 6

Implement:

```http
POST /api/applications
```

Example request:

```json
{
  "company": "Zalando",
  "position": "Frontend Engineer",
  "location": "Berlin",
  "status": "Applied",
  "jobType": "Full-time",
  "salary": 75000,
  "notes": "Applied through company website"
}
```

The controller should:

1. Read the request body
2. Validate the input
3. Use Drizzle to insert the record
4. Return the newly created application

Expected status:

```text
201 Created
```

---

# 🏁 Phase 10 — Get Applications

## Task 7

Implement:

```http
GET /api/applications
```

Use Drizzle to retrieve all applications.

Example response:

```json
{
  "success": true,
  "count": 2,
  "applications": [{}, {}]
}
```

---

# 🏁 Phase 11 — Get Single Application

## Task 8

Implement:

```http
GET /api/applications/:id
```

Example:

```text
GET /api/applications/1
```

Use the ID from the route parameter to query PostgreSQL.

If the application doesn't exist:

```text
404 Not Found
```

Example response:

```json
{
  "success": false,
  "message": "Application not found"
}
```

---

# 🏁 Phase 12 — Update Application

## Task 9

Implement:

```http
PUT /api/applications/:id
```

Example:

```json
{
  "status": "Interview"
}
```

The API should update the application using Drizzle.

Example:

```text
Applied
   ↓
Interview
```

Expected status:

```text
200 OK
```

---

# 🏁 Phase 13 — Delete Application

## Task 10

Implement:

```http
DELETE /api/applications/:id
```

Use Drizzle to delete the selected application.

Possible successful status:

```text
200 OK
```

or:

```text
204 No Content
```

---

# 🏁 Phase 14 — Query Parameters

Learn the difference between:

## Route Parameter

```text
/api/applications/:id
```

Example:

```text
/api/applications/1
```

Used when identifying a specific resource.

---

## Query Parameter

```text
/api/applications?status=Interview
```

Used for:

- Filtering
- Searching
- Sorting
- Pagination

---

# 🏁 Phase 15 — Filtering

## Task 11

Implement:

```http
GET /api/applications?status=Interview
```

Return only applications where:

```text
status = Interview
```

Also support:

```text
GET /api/applications?jobType=Full-time
```

and:

```text
GET /api/applications?company=Zalando
```

Use Drizzle's query capabilities to construct the appropriate database query.

### Success Criteria

- [ ] Filter by status
- [ ] Filter by job type
- [ ] Filter by company
- [ ] Multiple filters work correctly

---

# 🏁 Phase 16 — Search

## Task 12

Implement:

```http
GET /api/applications?search=frontend
```

Search across:

```text
company
position
location
```

For example:

```text
/api/applications?search=frontend
```

could return:

```text
Frontend Engineer
Senior Frontend Developer
Frontend Developer
```

Use PostgreSQL string matching through Drizzle.

---

# 🏁 Phase 17 — Error Handling

Create:

```text
src/middleware/errorMiddleware.js
```

Implement centralized error handling.

Your API should return consistent error responses.

Example:

```json
{
  "success": false,
  "message": "Application not found"
}
```

---

## Errors to Handle

- [ ] Invalid application ID
- [ ] Application not found
- [ ] Missing required fields
- [ ] Invalid status
- [ ] Invalid job type
- [ ] Database errors
- [ ] Unexpected server errors

---

# 🏁 Phase 18 — Standardize API Responses

Use a consistent structure.

## Success

```json
{
  "success": true,
  "data": {}
}
```

## Error

```json
{
  "success": false,
  "message": "Something went wrong"
}
```

---

# 🧪 Phase 19 — API Testing

Use:

- Postman
- Thunder Client
- Insomnia

Create a collection:

```text
Job Tracker API
│
├── Applications
│   ├── Create Application
│   ├── Get Applications
│   ├── Get Application
│   ├── Update Application
│   └── Delete Application
│
└── Search & Filters
    ├── Search
    ├── Filter by Status
    ├── Filter by Job Type
    └── Filter by Company
```

---

# 🧠 Database Concepts You Should Understand

After completing the database portion, you should be able to explain:

### PostgreSQL

- What is a relational database?
- What is a table?
- What is a row?
- What is a column?
- What is a primary key?
- What is a foreign key?
- What is an index?

### Drizzle ORM

- What is an ORM?
- Why use an ORM?
- What is Drizzle ORM?
- What is Drizzle Kit?
- What is a Drizzle schema?
- How does Drizzle generate SQL?
- How do migrations work?
- How do you perform SELECT queries?
- How do you perform INSERT queries?
- How do you perform UPDATE queries?
- How do you perform DELETE queries?

---

# 📌 Final API Specification

| Method | Endpoint                              | Description          |
| ------ | ------------------------------------- | -------------------- |
| GET    | `/`                                   | API health check     |
| GET    | `/api/applications`                   | Get all applications |
| GET    | `/api/applications/:id`               | Get one application  |
| POST   | `/api/applications`                   | Create application   |
| PUT    | `/api/applications/:id`               | Update application   |
| DELETE | `/api/applications/:id`               | Delete application   |
| GET    | `/api/applications?status=Interview`  | Filter by status     |
| GET    | `/api/applications?jobType=Full-time` | Filter by job type   |
| GET    | `/api/applications?company=Zalando`   | Filter by company    |
| GET    | `/api/applications?search=frontend`   | Search applications  |

---

# 🔥 Level 2 — Authentication

Only start this after completing the entire CRUD application.

Add a `users` table.

Implement:

```http
POST /api/auth/register
POST /api/auth/login
```

Learn:

- Password hashing
- JWT
- Authentication middleware
- Protected routes

Then protect:

```text
/api/applications/*
```

Your architecture becomes:

```text
Request
   ↓
Authentication Middleware
   ↓
Route
   ↓
Controller
   ↓
Drizzle ORM
   ↓
PostgreSQL
```

---

# 🔥 Level 3 — Database Relationships

After authentication, create a relationship between:

```text
users
   │
   │ 1
   │
   │
   │ many
   ↓
applications
```

Each application should belong to a user.

The `applications` table should contain:

```text
userId
```

as a foreign key referencing:

```text
users.id
```

---

## New Requirement

A user should only be able to:

- View their own applications
- Create applications for themselves
- Update their own applications
- Delete their own applications

This will introduce you to:

- Foreign keys
- Relationships
- Joins
- Authorization
- User-scoped queries

---

# 🔥 Level 4 — Application Statistics

Create:

```http
GET /api/applications/stats
```

Example response:

```json
{
  "total": 42,
  "applied": 20,
  "interviews": 10,
  "offers": 2,
  "rejected": 10
}
```

Use PostgreSQL aggregation through Drizzle.

This will introduce:

- `COUNT`
- `GROUP BY`
- Aggregate queries
- SQL expressions
- Drizzle query composition

---

# 🏆 Final Challenge

Once the backend is complete, connect it to a React frontend.

Build a simple dashboard:

```text
┌──────────────────────────────────────────────┐
│             Job Application Tracker           │
├──────────────────────────────────────────────┤
│                                              │
│  Total       Applied      Interviews  Offers │
│   42           20            10          2   │
│                                              │
├──────────────────────────────────────────────┤
│                                              │
│  Company       Position          Status      │
│  Zalando       Frontend Eng.     Interview   │
│  Wolt          React Developer   Applied     │
│  Celonis       Software Eng.     Rejected    │
│                                              │
└──────────────────────────────────────────────┘
```

Your complete architecture will then be:

```text
React
   ↓
HTTP / Fetch / Axios
   ↓
Express API
   ↓
Routes
   ↓
Controllers
   ↓
Drizzle ORM
   ↓
PostgreSQL
```

---

# 📈 Recommended Learning Order

Follow this sequence:

```text
1. Express Server
       ↓
2. Routes
       ↓
3. Controllers
       ↓
4. PostgreSQL Setup
       ↓
5. Drizzle Setup
       ↓
6. Database Schema
       ↓
7. Migrations
       ↓
8. CREATE
       ↓
9. READ
       ↓
10. UPDATE
       ↓
11. DELETE
       ↓
12. Query Parameters
       ↓
13. Filtering
       ↓
14. Search
       ↓
15. Validation
       ↓
16. Middleware
       ↓
17. Error Handling
       ↓
18. Authentication
       ↓
19. Relationships
       ↓
20. Statistics
       ↓
21. React Frontend
```

---

# 🎯 Definition of Done

Consider the project complete when:

- [ ] Express server works
- [ ] PostgreSQL connection works
- [ ] Drizzle ORM is configured
- [ ] Database schema is defined
- [ ] Drizzle migrations work
- [ ] Applications table is created
- [ ] All CRUD endpoints work
- [ ] Routes are separated from controllers
- [ ] Database operations are handled through Drizzle
- [ ] Validation is implemented
- [ ] Query parameters work
- [ ] Search works
- [ ] Filtering works
- [ ] Error middleware works
- [ ] HTTP status codes are appropriate
- [ ] API has consistent responses
- [ ] API has been tested using Postman/Thunder Client
- [ ] `.env` is excluded from Git
- [ ] Project is pushed to GitHub
- [ ] README documents the API

---

# 🚀 Stretch Goals

After completing the core project, consider adding:

- [ ] JWT authentication
- [ ] User registration/login
- [ ] Password hashing
- [ ] Protected routes
- [ ] User/application relationships
- [ ] Pagination
- [ ] Sorting
- [ ] Advanced filtering
- [ ] Application statistics
- [ ] Rate limiting
- [ ] Request logging
- [ ] API documentation
- [ ] Unit tests
- [ ] Integration tests
- [ ] Docker
- [ ] Deployment

---

## 💡 Important Rule

**Don't copy the complete implementation from a tutorial.**

Build each feature yourself.

When you get stuck, investigate the problem and try to understand:

```text
Request
   ↓
Route
   ↓
Controller
   ↓
Drizzle ORM
   ↓
PostgreSQL
   ↓
Response
```

The goal isn't simply to make an API that works.

The goal is to understand **why the code is structured this way and how the different backend layers communicate with each other**.

By the end of this project, you should be comfortable building a small Express backend from scratch without following a tutorial.
