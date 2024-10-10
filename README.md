# PyCray_Assessment

# Shubham-Tribhuvan-PyCray_Assessment

## [Deployment Link](https://py-cray-assessment.vercel.app)

## [DEMO VIDEO](https://www.loom.com/share/11d495a6ab714056af06b31caa0a1444?sid=9734f4b2-6978-4790-9ea6-4b5687b46683)

### PyCray Assessment Dashboard

## Overview

This project involves creating a dashboard for property management. The frontend is built with React.js, and the backend uses Node.js to serve data through a RESTful API. PostgreSQL is used for data storage, while Python is utilized for data fetching and generation. The project aligns with the design provided in the Figma file.


### Technologies

1) Frontend: React.js, Context API/Redux, HTML, CSS (for UI responsiveness)
2) Backend: Node.js, Express.js (RESTful API)
3) Database: PostgreSQL
4) Data Fetching: Python
5) Other: Figma (UI Design Reference)

### Running the Application
 1.Backend: Set up the Node.js server as described above. 
`node index.js`

 2.Frontend: Set up the React.js application as described. 
 `npm run start`
 
3.Database: Set up PostgreSQL with the provided schema and data. 

4.Data Fetching: Run the Python script to generate data. 
`python fetch_data.py `

5.Once everything is set up, the application should be running on http://localhost:3001 (for frontend) and http://localhost:3000 (for backend).



### Database Setup (PostgreSQL)

1.The PostgreSQL database is used to store data for properties, occupancy rates, and financial records. Below is a basic schema structure:

## Tables:
1.Properties: Stores information about each property.
id, owner_name, property_name, total_units, filled_units, vacant_units, occupancy_rate, last_maintenance_date

2.Financial Records: Stores financial data for each property.id, property_id, income, expenses, net_profit
Steps to Set Up the Database:

3.Install PostgreSQL if not already installed.
Create a new database:`CREATE DATABASE property_management`

4.Run the schema SQL file to create the necessary tables:`psql -d property_management -f schema.sql`

5.opulate the tables with sample data using sample_data.sql.

