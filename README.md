# Smart Hostel Room Allocation System


## Overview

The Smart Hostel Room Allocation System is a full-stack web application designed to manage hostel rooms and automatically allocate rooms to students based on capacity and facility requirements.

### The project demonstrates:

Data modeling

REST API design

Allocation algorithm implementation

Frontend–backend integration


## Objective

To build a working application that:

Manages hostel room inventory

Allows dynamic room creation

Automatically allocates the smallest suitable room based on given constraints

Provides a simple and usable UI for interaction

### Functional Requirements Implemented
1. Add Room

Add new hostel rooms via UI

Each room includes:

Room number (unique)

Capacity

AC availability

Attached washroom availability

2. View All Rooms

Display a list of all rooms

Show:

Room number

Capacity

Facilities

Allocation status (Available / Allocated)

3. Allocate Room (Core Feature)

Allocate rooms using:

Number of students

AC requirement

Washroom requirement

Allocation rules:

Only unallocated rooms are considered

Capacity must be ≥ required students

Facility requirements must match

Smallest suitable room is allocated

If no room matches → display “No room available”

Allocation Logic

The allocation algorithm follows these steps:

Fetch all unallocated rooms

Filter rooms based on:

Capacity constraint

AC requirement

Washroom requirement

Sort eligible rooms by capacity (ascending)

Allocate the smallest room that satisfies all conditions

If no room qualifies, return a failure message

This ensures optimal space utilization and predictable allocation behavior.

Tech Stack
Frontend

React (Vite)

JavaScript

HTML, CSS

Backend

Node.js

Express.js

MongoDB

Mongoose

## Project Structure

Smart-Hostel-Room/
│
├── client/                  # Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddRoom.jsx
│   │   │   ├── RoomList.jsx
│   │   │   └── AllocateRoom.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   └── package.json
│
├── server/                  # Backend
│   ├── models/
│   │   └── Room.js
│   ├── routes/
│   │   └── roomRoutes.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md

API Design
Add Room
POST /api/rooms

Get All Rooms
GET /api/rooms

Allocate Room
POST /api/allocate

Sample Request
{
  "students": 2,
  "needsAC": true,
  "needsWashroom": false
}

## Setup Instructions

Backend Setup
cd server
npm install


Create .env file:

PORT=5000
MONGO_URI=mongodb://localhost:27017/


Start server:

npm start


## Backend runs on:

http://localhost:5000

Frontend Setup
cd client
npm install
npm run dev


## Frontend runs on:

http://localhost:5173

## Validation & Error Handling

Prevents duplicate room numbers

Handles invalid allocation requests

Displays appropriate messages when no room is available

Ensures backend–frontend field consistency

Assumptions & Limitations

Single hostel supported

No authentication/authorization

No student profile management

Manual testing only

Designed for functional correctness over advanced UI

Future Improvements

Room search & filtering

Student records

Allocation history

Authentication & role-based access

Enhanced UI/UX

Evaluation Readiness

This project demonstrates:

Clear understanding of backend APIs

Proper frontend state management

Correct implementation of allocation logic

Clean separation of concerns

Ability to deliver a complete solution within a limited timeline

## Author

Abhishek Kumar Singh
