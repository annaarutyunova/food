const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongodb = require('./model/index.js');
const port = process.env.PORT || 8080
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const cors = require('cors');
/////These lines are new
// const { auth: auth1} = require('express-oauth2-jwt-bearer');
const { auth: auth2 } = require("express-openid-connect");
// const jwtCheck = auth1({
//   audience: 'https://food-lrc1.onrender.com/',
//   issuerBaseURL: 'https://dev-us5m3466ym0sk11q.us.auth0.com/',
//   tokenSigningAlg: 'RS256'
// });

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASEURL,
  clientID: process.env.CLIENTID,
  issuerBaseURL: process.env.ISSUER,
};
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth2(config));
////////// The end of new lines

const checkAuth = (req, res) => {
  if (!req.oidc.isAuthenticated()) {
    return res.status(401).send('Not logged in');
  }
  // res.send(JSON.stringify(req.oidc.user));
}

app.use('/api-docs', checkAuth, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(bodyParser.json())
app.use('/', require('./routes'))
app.use(cors());

mongodb.initDb((err) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port);
      console.log(`Connected to DB and listening on ${port}`);
    }
  });

