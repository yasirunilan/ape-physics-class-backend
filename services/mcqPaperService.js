var model = require('../models/index');

exports.getAllActiveMcqPapers = async () => {
    try {
        const mcqPapers = await model.McqPaper.findAll({ where: { active: 1 }});
        return mcqPapers;
    } catch(e) {
        console.log(e.message)
        return false;
    }
}
