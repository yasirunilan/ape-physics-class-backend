var model = require('../models/index');

exports.getAllClassCategoriesWhichAreNotOnlyPaymentCategories = async (active) => {
    try {
        const classCategories = await model.classCategory.findAll(active?{ where: { active: active, isOnlyPaymentCategory: false }}:{ where: { isOnlyPaymentCategory: false }});
        return classCategories;
    } catch(e) {
        console.log(e.message)
        return false;
    }
}

exports.getAllClassCategories = async (active) => {
    try {
        const classCategories = await model.classCategory.findAll(active?{ where: { active: active }}:{});
        return classCategories;
    } catch(e) {
        console.log(e.message)
        return false;
    }
}
