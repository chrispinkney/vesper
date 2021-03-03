const express = require('express');
const bodyParser = require('body-parser');
const db = require('../services/firestore');

const router = express.Router();
router.use(bodyParser.json());

router.get('/getall', async (req, res, next) => {
  try {
    const diseaseRef = db.collection('Vaccines');
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

module.exports = router;
