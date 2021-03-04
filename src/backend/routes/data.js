const express = require('express');
const bodyParser = require('body-parser');
const db = require('../services/firestore');

const router = express.Router();
router.use(bodyParser.json());

router.get('/getallvaccines', async (req, res, next) => {
  try {
    const diseaseRef = db.collection('vaccines');
    const snapshot = await diseaseRef.get();

    if (snapshot.empty) {
      res.status(404).json({
        msg: `That collection could not be found, or contains no data.`,
      });
    } else {
      const diseaseArray = [];
      snapshot.forEach((doc) => {
        diseaseArray.push(doc.data());
      });
      res.status(200).json(diseaseArray);
    }
  } catch (err) {
    next(err);
  }
});

// router.get('/getalltests', async (req, res, next) => {
//   try {
//     const diseaseRef = db.collection('tests');
//     const snapshot = await diseaseRef.get();

//     if (snapshot.empty) {
//       res.status(404).json({
//         msg: `That collection could not be found, or contains no data.`,
//       });
//     } else {
//       const testArray = [];
//       snapshot.forEach((doc) => {
//         testArray.push(doc.data());
//       });
//       res.status(200).json(testArray);
//     }
//   } catch (err) {
//     next(err);
//   }
// });

router.get('/getuser', async (req, res, next) => {
  try {
    const userRef = db.collection('users').doc('5584-486-674');
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
      res.status(404).json({
        msg: `That collection could not be found, or contains no data.`,
      });
    } else {
      res.status(200).json(snapshot.data());
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
