const classCategoriesService = require('../services/classCategoriesService');

exports.getAllClassCategories = async (req, res, next) => {
    try {
        let active = req.query.active;
        const classCategories = await classCategoriesService.getAllClassCategories(active);
        if(classCategories){
            res.send({
                error: false,
                data: classCategories
            })
        }else {
            res.send({data: [], error: false})
        }
    } catch(e) {
        console.log(e.message)
        res.sendStatus(500)
    }
}
