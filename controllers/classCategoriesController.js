const classCategoriesService = require('../services/classCategoriesService');

exports.getAllClassCategoriesWhichAreNotOnlyPaymentCategories = async (req, res, next) => {
    try {
        let active = req.query.active;
        const classCategories = await classCategoriesService.getAllClassCategoriesWhichAreNotOnlyPaymentCategories(active);
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
