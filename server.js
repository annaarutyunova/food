const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongodb = require('./model/index.js');
const port = process.env.PORT || 8080
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const cors = require('cors');
// const { signupValidation, loginValidation } = require('./validation.js');


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
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

