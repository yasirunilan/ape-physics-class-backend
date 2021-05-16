var model = require('../models/index');

exports.getAllClassCategories = async (active) => {
    try {
        const classCategories = await model.ClassCategory.findAll(active?{ where: { active: active }}:{});
        return classCategories;
    } catch(e) {
        console.log(e.message)
        return false;
    }
}
