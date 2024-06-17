const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
    hospitalName: {
        type: String,
        required: true
    },
    speciality: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    locationurl: {
        type: String,
        required: true
    }
});

const Hospital = mongoose.model('Hospital', hospitalSchema);

module.exports = Hospital;
