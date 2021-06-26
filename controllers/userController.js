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

exports.getLoggedInUser = async (req, res, next) => {
    try {
        let user = req.user;
        let filters = {
            userId: user.userId
        }
        const loggedInUser = await userService.getUsersByFilters(filters);
        if(loggedInUser){
            res.send({
                error: false,
                data: {data: loggedInUser}
            })
        }else{
            res.send({data: [], error: false})
        }
    } catch(e) {
        console.log(e.message)
        res.sendStatus(500)
    }
}

exports.addNewUser = async  (req, res, next) => {
    try {
        let data = req.body;
        let filter = {
            username: data.username
        }

        const user = await userService.getUsersByFilters(filter);
        console.log(user)
        if(user.data.length > 0){
            res.send({data: [], error: true, message: 'User with Same Username Exists'})
        }else{
            const newUser = await userService.addNewUser(data);

            if(newUser){
                res.send({
                    error: false,
                    data: newUser,
                    message: 'Successfully Added'
                })
            }else {
                res.send({data: [], error: false})
            }
        }

    } catch(e) {
        console.log(e.message)
        res.sendStatus(500)
    }
}

exports.updateUserProfile = async  (req, res, next) => {
    try {
        let userId = req.params.userId;
        let data = req.body;
        const updatedUser = await userService.updateUserProfile(userId, data);

        if(updatedUser){
            res.send({
                error: false,
                data: updatedUser
            })
        }else {
            res.send({data: [], error: false})
        }
    } catch(e) {
        console.log(e.message)
        res.sendStatus(500)
    }
}
