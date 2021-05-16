const practicalVideoService = require('../services/practicalVideoService');

exports.getAllActivePracticalVideos = async (req, res, next) => {
    try {
        const practicalVideos = await practicalVideoService.getAllActivePracticalVideos();
        if(practicalVideos){
            res.send({
                error: false,
                data: practicalVideos
            })
        }else {
            res.send({data: [], error: false})
        }
    } catch(e) {
        console.log(e.message)
        res.sendStatus(500)
    }
}
