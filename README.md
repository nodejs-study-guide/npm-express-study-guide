# npm-express-study-guide

nodejs express webserver notes

## example 01

```bash
npm init -y
npm install express
```

then created app.js

```javascript
'use strict'

const express = require('express')

const app = express()

// This get basically means if this endpoint is requested, then existing this javascript function:
app.get('/',(req, res)=>{
 res.send("hello from my app")
})


app.listen(3000, ()=> {
 console.log('listening on port 3000')
})
```

Then run:

```bash
$ node app.js
listening on port 3000
```

This caused the terminal to hang since it's listening on a port.

and on another terminal run:

```bash
$ curl http://localhost:3000/ 
hello from my app
```

## example 02 - refactor

Doing `npm test` would cause app to actually start listening, and cause things to hang.

That's why split out app.js into 2 separate files. app.js and server.js. That's done for unit testing purposes only.

Now we can create appTest.js but but no need to write serverTest.js becuse there's nothing of interest that needs testing here.

Now have to start app using `node server.js`

Also updates package.json so you now can use `npm start` instead of `node server.js`

## example 03 - add linting

We're going to use the standard function to do the linting:

```bash
npm install -D standard
```

also added "lint" and "lint:fix" npm-run scripts to the package.json. So now can do:

```bash
npm run lint
npm run lint:fix
```

## example 04 - add unit test

<https://github.com/Sher-Chowdhury/npm-supertest-and-nock-demo>

```bash
npm install -D mocha chai 
npm install -D supertest nock
npm install -D standard
```

Also added a few run-scripts in `package.json`.
