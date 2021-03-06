const deepmerge = require('deepmerge');

module.exports = function(obj) {
    let result = {};
    let saveObj = {};

    for (let prop in obj) {
        let val = obj[prop];

        if (typeof prop === "string") {
            let propsArray = prop.split('.');

            if (propsArray.length > 1) {
                while(propsArray.length > 0){
                    saveObj = {};
                    saveObj[propsArray.pop()] = val;
                    val = saveObj;
                }
                result = deepmerge(result, val);
            } else {
                saveObj = {};
                saveObj[prop] = val;
                result = deepmerge(result, saveObj);
            }
        } else {
            saveObj = {};
            saveObj[prop] = val;
            result = deepmerge(result, saveObj);
        }
    }

    return result;
};
