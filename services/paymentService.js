var model = require('../models/index');

exports.addNewPayment = async (data, user) => {
    try {
        let payment = {
            date: data.date,
            userId: user.userId,
            classCategoryId: data.classCategoryId,
            amount: data.amount,
            expireDate: data.expireDate,
            extraData: data.extraData,
            note: data.note
        };

        if(data.slip){
            payment.slip = data.slip;
            payment.slipFileType = data.slipFileType
        }
        let savedPayment = await model.payment.create(payment)
        return savedPayment;

    } catch(e) {
        console.log(e.message)
        return false;
    }
}
