
# Pawty Patrol Frontend

Pawty Patrol is a web application that allows users to create and find pet-friendly events such as park visits, cafe meetups, and trail walks. This repository contains the frontend code for the application, built using **React**.



The backend for this project is available [here](https://github.com/Sthefani07/Pawty-Patrol_Backend.git).

---

https://github.com/user-attachments/assets/47d5e260-5497-4875-a236-59d98d5d26d9 



## Features

- **User Authentication**: Users can sign up, log in, and log out.
- **Event Management**:
  - Create new pet-friendly events.
  - View a list of all events.
  - Edit or delete events (authorized users only).
- **User-Friendly Interface**: Clean and simple design with fun colors inspired by a pet-friendly vibe.

---

## Tech Stack

### Frontend:
- **React**: For building the user interface.
- **React Router DOM**: For navigation between pages.
- **React Cookies**: For managing user tokens (authentication).
- **Axios**: For API calls to the backend.

### Installation


1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/pawty-patrol.git
   cd pawty-patrol

   - Install dependencies
   npm install

   -Run the application 
   npm run dev



### Backend (Assumed Setup):
- The backend is built using **Node.js** with **Express** and communicates via a RESTful API. Ensure the backend is running before starting the frontend.

---

# Pages and Components

## Pages:

### Home Page (`/`)
- Welcomes users to **Pawty Patrol**.
- Includes a **"Get Started"** button directing users to log in or sign up.

### Auth Page (`/auth`)
- Contains login and signup forms.
- Allows users to switch between the forms using buttons.

### Dashboard (`/dashboard`)
- Displays user-specific actions and logout options.

### Locations Page (`/locations`)
- Lists all events created by users.
- Includes buttons to **edit** or **delete** events.

### Add Event Page (`/add-event`)
- Provides a form for creating new pet-friendly events.

### Edit Event Page (`/edit-event/:id`)
- Provides a form to update an existing event's details.





