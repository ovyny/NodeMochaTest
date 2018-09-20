const deepmerge = require('deepmerge');

module.exports = function(obj) {
    let result = {};
    for (let prop in obj) {
        if (typeof prop === "string") {
            let propsArray = prop.split('.');
            let val = obj[prop];
            let verif = val;
            if (propsArray.length > 1) {
                while(propsArray.length > 0){
                    let saveObj = {};
                    saveObj[propsArray.pop()] = val;
                    val = saveObj;
                }
                result = deepmerge(result, val);
            } else {
                let saveObj = {};
                saveObj[prop] = val;
                result = deepmerge(result, saveObj);
            }
        }
    }

    return result;
};