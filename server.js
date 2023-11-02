const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongodb = require('./model/index.js');
const port = process.env.PORT || 8080
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const cors = require('cors');
/////These lines are new
const { auth } = require('express-oauth2-jwt-bearer');
const jwtCheck = auth({
  audience: 'https://food-lrc1.onrender.com/',
  issuerBaseURL: 'https://dev-us5m3466ym0sk11q.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});
////////// The end of new line

// const { signupValidation, loginValidation } = require('./validation.js');

app.use('/api-docs', jwtCheck, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(bodyParser.json())
app.use('/', require('./routes'))
app.use(cors());

// app.listen(process.env.PORT || 8080, () => {
//     console.log('Web Server is listening at port ' + (process.env.PORT || 8080));
// });

mongodb.initDb((err) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port);
      console.log(`Connected to DB and listening on ${port}`);
    }
  });

