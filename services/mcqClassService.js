var model = require('../models/index');

exports.getAllActiveMcqClasses = async () => {
    try {
        const mcqClasses = await model.McqClass.findAll({ where: { active: 1 }});
        return mcqClasses;
    } catch(e) {
        console.log(e.message)
        return false;
    }
}
