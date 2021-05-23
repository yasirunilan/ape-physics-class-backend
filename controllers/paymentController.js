const paymentService = require('../services/paymentService');

exports.addNewPayment = async (req, res, next) => {
    try {
        let data = req.body;
        const newPayment = await paymentService.addNewPayment(data);
        if(newPayment){
            res.send({
                error: false,
                data: newPayment
            })
        }else {
            res.send({data: [], error: false})
        }
    } catch(e) {
        console.log(e.message)
        res.sendStatus(500)
    }
}
