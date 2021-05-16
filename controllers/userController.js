const userService = require('../services/userService');

exports.getUserByFilterValues = async (req, res, next) => {
    try {
        let filters = req.query.filters;
        const users = await userService.getUsersByFilters(filters);
        if(users){
            res.send({
                error: false,
                data: {data: users}
            })
        }else{
            res.send({data: [], error: false})
        }
    } catch(e) {
        console.log(e.message)
        res.sendStatus(500)
    }
}
