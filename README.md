# SollIchDahin

SollIchDahin is a website to help students answer the monumental question of whether or not to attend a lecture.

## Installation

Important: The frontend and backend are separate npm projects, which means you have to separately install the dependencies using npm.

```bash
npm install
```

## Usage

To use the backend you have to add an .env file on the top layer outside the src with the following content.
It is important that the username and password are actually registered in the cluster to be able to be used with mongodb.

```javascript
MONGODB_URL=mongodb+srv://<username>:<password>@cluster0-wraa5.mongodb.net/test?retryWrites=true&w=majority
JWT_KEY=sollichdahin
PORT=3001
```

Then you can simply start the backend on PORT 3001 by using the command:

```bash
npm start
```

Once you have installed Angular you can use the frontend right away. To start it you just have to navigate into to frontend folder and use the command:

```bash
ng serve --open
```