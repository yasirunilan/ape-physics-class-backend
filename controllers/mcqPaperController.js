const mcqPaperService = require('../services/mcqPaperService');

exports.getAllActiveMcqPapers = async (req, res, next) => {
    try {
        const mcqPapers = await mcqPaperService.getAllActiveMcqPapers();
        if(mcqPapers){
            res.send({
                error: false,
                data: mcqPapers
            })
        }else {
            res.send({data: [], error: false})
        }
    } catch(e) {
        console.log(e.message)
        res.sendStatus(500)
    }
}
