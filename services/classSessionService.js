var model = require('../models/index');

exports.getAllClassSessionsOfClassCategory = async (classCategoryId) => {
    try {
        const ClassSessions = await model.ClassSession.findAll({ where: { classCategoryId: classCategoryId }});
        return ClassSessions;
    } catch(e) {
        console.log(e.message)
        return false;
    }
}
