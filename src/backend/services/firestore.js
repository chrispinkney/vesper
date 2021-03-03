const admin = require('firebase-admin');
require('dotenv').config();

const serviceAccount = require('../config/serviceAccountKey.json');

if (process.env.FIRESTORE_EMULATOR_HOST === 'localhost:8080') {
  console.log('Connected to Firebase in emulator mode');
  admin.initializeApp({
    projectId: 'my-health-passport-canada',
    credential: admin.credential.applicationDefault(),
  });
} else {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

module.exports = admin.firestore();
