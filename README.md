# Plexxis Interview Exercise

## How To Play

Start MongoDB
```js
mongod
```

Start app with the following command. Do not use nodemon, because yarn start is combined with concurrently, and it starts both front end and backend. 
```js
yarn start
```

## Plugin Added

1) Front End: React, Redux, React Table, Redux-Thunk, react-router-dom: React Router, Fragment
2) Back End: MongoDB, Mongoose, Body-parser, 


## Things Have Been Done

1) Retrieve employees from a REST API  
2) Display the employees in a React application  
3) Has UI mechanisms for creating and deleting employees  
4) Has API endpoints for creating and deleting employees  
5) Edit your version of the `README.md`
6) Use MongoDB database to store the data
8) Add API endpoint to update employee data  
9) Use [React Table](https://react-table.js.org)  

## Things Could Make Life Better
1) Error handling
2) Modularization
3) Separate backend and frontend files
4) Use Axios to make HTTP requests
5) Use Loopback to connect MongoDB
6) Form Validation
7) Positive updating in front end: When user do DELETE, first delete local Redux data, send DELETE request to server. If server return error, rollback the local data. which speed up the app, and reduce the api calls to server. 
8) Use the Atlas Cloud MongoDB. I am currently working on it. Hopefully done at the time of the interview. 
9) Deploy app to Google App Engine. I am currently working on it. Hopefully done at the time of the interview. 