var model = require('../models/index');

exports.getAllClassPayments = async () => {
    try {
        const classPayments = await model.classPayment.findAll();
        return classPayments;
    } catch(e) {
        console.log(e.message)
        return false;
    }
}
