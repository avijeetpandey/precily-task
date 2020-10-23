# MERN task for precily :tada: :rocket:

A simple REACT and NodeJs app for resizable components<br/>
I have made this app as a morning dashboard wherein user can add/update the quote of the day and can view the latest tech news related to javascript(hardcoded) ,
all the three components are resizable and can shrink /grow according to their neighbours

## Stack :muscle:

- **Frontend**
  - [x] React , Semantic-UI
- **Backend**
  - [x] NodeJs , Express
- **Database**
  - [x] MongoDB

## API Description

The API supports three endpoints ie

- **/add** for adding the quotes 
- **/update** for updating the quotes
- **/count** for returning the count of the API calls

## Setting up project locally

In order to run the project on your local machine , please follow the instructions below , before cloning the repo make sure mongodb is all set and is up and running

```
git clone https://github.com/avijeetpandey/precily-task.git

npm install (to install all server packages )

cd client

npm install (to install all client packages)

cd root project directory

npm run dev ( This will start both the client and server simultaneoulsy)
```

## Folder Structure Description
- **Client**
    - [x] **Components :**  This folder contains varoius react components used throughout the project
- **Server**
    - [x] **Models :** Contains the basic schema structure of the quote
    - [x] **Connection :** Contains database connection related configuration 


## APP Screenshots (UI)