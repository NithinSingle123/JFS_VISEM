# Course Registration Form

## Overview
A simple static HTML/CSS/JavaScript application for course registration. Users can select courses, see the total fee calculated dynamically, and submit their registration.

## Project Architecture
- **Type**: Static frontend website (no backend)
- **Languages**: HTML, CSS, JavaScript
- **Structure**:
  - `Course_Registration/` - Main application directory
    - `course_registration.html` - Main HTML page
    - `css/style.css` - Styling
    - `js/script.js` - Client-side logic for fee calculation

## Setup
- Uses `http-server` to serve static files
- Runs on port 5000 with host 0.0.0.0 for Replit compatibility
- Cache disabled (`-c-1`) for development

## Features
- Dynamic fee calculation as courses are selected
- Form validation
- Displays selected courses and total fee on submission

## Recent Changes
- **Dec 03, 2025**: Initial Replit environment setup
  - Added package.json with http-server
  - Configured workflow for port 5000
  - Added .gitignore for node_modules
