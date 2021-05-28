var model = require('../models/index');

exports.addNewUserClassCategoryPayment = async (data, payment) => {
    try {
        let classPayment = {
            userId: data.userId,
            classId: data.classId,
            paymentId: payment.id,
        };

        let savedPayment = await model.payment.create(payment)
        return savedPayment;

    } catch(e) {
        console.log(e.message)
        return false;
    }
}
