#React+SCSS and Express server boilerplate


##**CLIENT**##

###1) Create client:
```
npm install -g create-react-app
create-react-app <projectname>
```

###2) Test pure React client
```
cd <projectname>
npm start
```

###3) Install SCSS
run-all needed to start/watch or build **react&scss together** on start or build
```
npm install node-sass --save-dev
npm install npm-run-all --save-dev
```
edit package.json
  - start&build replaced by
  ```
    "start-js": "react-scripts start",
    "start": "npm-run-all -p watch-css start-js",
    "build": "npm run build-css && react-scripts build",
  ```
  - add
  ```
    "build-css": "node-sass src/ -o src/",
    "watch-css": "npm run build-css && node-sass src/ -o src/ --watch --recursive",
  ```

###4) Test React and SCSS
```
cd <projectname>
npm start
```


##**SERVER**##
###1) Create server (from example repo):
```
cd ..
git clone https://github.com/fullstackreact/food-lookup-demo.git
```

###2) Bring together server and client:
- go inside **<projectname>** and create **client** folder
- move from the **<projectname>** root the following files into **client**
```
public/*
src/*
package.json
```
-move from **food-lookup-demo** folder the following files into **<projectname>**
```
db/*
server.js
start-client.js
package.json
```

###3) Test server:
```
cd <projectname>
npm run server
```
then kill it using ctrl+C

###4) Start server and client together:
install concurrently package
```
npm i --save-dev concurrently
```
and run BOTH server (port 3001) and client (port 3000)
 - *UNIX* (we can delete *start-client.js*)
  ```
  concurrently "npm run server" "cd client && npm start"
  ```
  - *Windows and cross compatibility* (*start-client.js* needed) **strongly suggested**
  ```
  concurrently "npm run server" "npm run client"
  ```

if everything works fine, edit root *package.json*
```
"scripts": {
    "start": "concurrently \"npm run server\" \"npm run client\"",
    "server": "node server.js",
    "client": "node start-client.js"
  },
```

Everythin now runs with
```
npm start
```
