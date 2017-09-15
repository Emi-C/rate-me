#**React+SCSS and SERVER boilerplate**

#How to start
open bash and clone repo
```
git clone  https://github.com/Emi-C/react-server-boilerplate.git
cd react-server-boilerplate
cd server
npm install
PORT=3001 node bin/www
```
*PORT can be configured as you wish, but accordingly to what specified in client/package.json at line*
```
"proxy": "http://localhost:3001"
```

Let the server run, and open a new bash
```
cd client
npm install
npm start
```
If everything is fine, you should display this
![alt text](http://i67.tinypic.com/11r83f8.png "Working App")


#How it's made
##**CLIENT**
The client is based on the create-react-app repo:
the additional modules installed are:
  node-sass  
  npm-run-all
to respectively include a scss compiler and watch updates on the scss (and rebuild) along with updates to the js app itself

*Complete variations from create-react-app:*
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

Additionally, to display the server results I edited App.js like this
```
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {}
    };
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Users</h1>
        {Object.keys(this.state.users).map((key) => {
          return(<div key={this.state.users[key].id}>{this.state.users[key].username}</div>);
        })}
      </div>
    );
  }
}
```

##**SERVER**
The server is based on the react-backend express package:
```
express react-backend
```
For the boilerplate example results I edited the `routes/users.js` file like this
```
var express = require('express');
var router = express.Router();

/* START EDITING. */
router.get('/', function(req, res, next) {
  res.json([{
  	id: 1,
  	username: "pippomio"
  }, {
  	id: 2,
  	username: "topoloide"
  }]);
});
/* DONE EDITING. */
module.exports = router;
```


#Sources & Inspiration
[Create React App Repository](https://github.com/facebookincubator/create-react-app "Create React App")
[Express react-backend package](https://expressjs.com/en/starter/generator.html "Lack of better official source")
[Put together server and client](https://daveceddia.com/create-react-app-express-backend/ "Create React App with an Express Backend")
