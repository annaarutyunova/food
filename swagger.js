const swaggerAutogen = require('swagger-autogen')();
const doc = {
    info: {
        title: "Contacts API",
        description: "API for contacts",
    },
    host : 'localhost:8080',
    // host : 'food-lrc1.onrender.com',
    schemes: ['http', 'https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);