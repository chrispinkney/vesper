const admin = require('firebase-admin');

admin.initializeApp({
  projectId: 'my-health-passport-canada',
  credential: admin.credential.applicationDefault(),
});

console.log('Server running in emulator mode.');

module.exports = admin.firestore();
