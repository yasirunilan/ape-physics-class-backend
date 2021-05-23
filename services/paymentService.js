var model = require('../models/index');

exports.addNewPayment = async (data) => {
    try {
        let payment = {
            date: data.date,
            amount: data.amount,
            expireDate: data.expireDate,
            note: data.note
        };

        if(data.slip){
            payment.slip = data.slip;
            payment.slipFileType = data.slipFileType
        }
        let savedPayment = await model.Payment.create(payment)
        return savedPayment;

    } catch(e) {
        console.log(e.message)
        return false;
    }
}
