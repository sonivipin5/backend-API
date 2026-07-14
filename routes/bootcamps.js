const express = require('express');
const router = express.Router();

const {
    getBootcamps,
    getBootcamp,
    createBootcamp,
    updateBootcamp,
    daleteBootcamp
} = require('../controllers/bootcamps');


router.route('/').get(getBootcamps).post(createBootcamp);
router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(daleteBootcamp);

module.exports = router;