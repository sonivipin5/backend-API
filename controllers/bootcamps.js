
// @desc Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res) => {
    res.status(200).json({ success: true, message: 'show all bootcamps' });
};


// @desc Get single bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Private
exports.getBootcamp = (req, res) => {
     res.status(200).json({ success: true, message: `show single bootcamps ${req.params.id}` });
};

// @desc Create bootcamp
// @route POST /api/v1/bootcamps/:id
// @access Private
exports.createBootcamp = (req, res) => {
    res.status(200).json({ success: true, message: 'Create new bootcamp' });
};

// @desc Update bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = (req, res) => {
    res.status(200).json({ success: true, message: `Update bootcamp ${req.params.id}` });
};

// @desc Delete bootcamp
// @route DELETE /api/v1/bootcamps/:id
// @access Private
exports.daleteBootcamp = (req, res) => {
    res.status(200).json({ success: true, message: `Delete bootcamp ${req.params.id}` });
};