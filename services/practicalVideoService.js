var model = require('../models/index');

exports.getAllActivePracticalVideos = async () => {
    try {
        const practicalVideos = await model.PracticalVideo.findAll({ where: { active: 1 }});
        return practicalVideos;
    } catch(e) {
        console.log(e.message)
        return false;
    }
}
