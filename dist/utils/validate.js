"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateVariables = validateVariables;
let _throw = (m) => { throw new Error(m); };
function validateVariables(variables) {
    Object.entries(variables).forEach(([key, value]) => {
        if (value.value) {
            return;
        }
        if (value.mandatory) {
            _throw(`Variable ${key} is mandatory`);
        }
        else {
            value.value = variables[key].default;
        }
    });
}
//# sourceMappingURL=validate.js.map