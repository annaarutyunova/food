const {MongoClient} = require('mongodb');
const dotenv = require("dotenv");
dotenv.config();
// async function main() {
//     const uri = process.env.MONGODB_URI;
//     const client = new MongoClient(uri);
//     let databases = [];
//     try {
//         await client.connect();
//         databases = await listDatabases(client);
//     } catch (e) {
//         console.error(e);
//         throw e; // Re-throw the error to propagate it to the caller (controller).
//     } finally {
//         await client.close();
//         return databases;
//     }
// }

// main().catch(console.error);

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
//     return databasesList;
// };


let _db;

const initDb = (callback) => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

module.exports = {
  initDb,
  getDb
};