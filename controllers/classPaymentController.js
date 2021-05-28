const classPaymentService = require('../services/classPaymentService');

exports.getAllClassPayments = async (req, res, next) => {
    try {
        const classPayments = await classPaymentService.getAllClassPayments();
        if(classPayments){
            res.send({
                error: false,
                data: classPayments
            })
        }else {
            res.send({data: [], error: false})
        }
    } catch(e) {
        console.log(e.message)
        res.sendStatus(500)
    }
}
