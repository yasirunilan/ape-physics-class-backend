const classSessionService = require('../services/classSessionService');

exports.getAllClassSessionsOfClassCategory = async (req, res, next) => {
    try {
        let classCategoryId = req.params.classCategoryId;
        const classSessions = await classSessionService.getAllClassSessionsOfClassCategory(classCategoryId);
        if(classSessions){
            res.send({
                error: false,
                data: classSessions
            })
        }else {
            res.send({data: [], error: false})
        }
    } catch(e) {
        console.log(e.message)
        res.sendStatus(500)
    }
}
