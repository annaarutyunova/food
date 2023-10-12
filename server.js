const express = require('express');
const app = express();
const bodyParser = require("body-parser");
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');


// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.json())

app.use('/', require('./routes'))

app.listen(process.env.PORT || 8080, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || 8080));
});

