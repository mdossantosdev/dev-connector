const mongoose = require('mongoose');

const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbCluster = process.env.DB_CLUSTER;
const dbName = process.env.DB_NAME;

const uri = `mongodb+srv://${dbUsername}:${dbPassword}@${dbCluster}/${dbName}?retryWrites=true&w=majority`;

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

const connectDB = async () => {
  try {
    await mongoose.connect(uri, options);

    console.log('Connected to the DB 🛰');
  } catch (err) {
    console.log(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
