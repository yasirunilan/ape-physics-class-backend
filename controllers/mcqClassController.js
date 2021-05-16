const mcqClassService = require('../services/mcqClassService');

exports.getAllActiveMcqClasses = async (req, res, next) => {
    try {
        const mcqClasses = await mcqClassService.getAllActiveMcqClasses();
        if(mcqClasses){
            res.send({
                error: false,
                data: mcqClasses
            })
        }else {
            res.send({data: [], error: false})
        }
    } catch(e) {
        console.log(e.message)
        res.sendStatus(500)
    }
}
