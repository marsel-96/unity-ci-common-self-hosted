require('./sourcemap-register.js');/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 208:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.runCommand = runCommand;
const child_process_1 = __nccwpck_require__(81);
async function runCommand(command, args) {
    let child = (0, child_process_1.spawn)(command, args);
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
    const waitOutputCompletion = new Promise((resolve, _) => {
        child.stdout.on('end', () => {
            resolve();
        });
    });
    return new Promise((resolve, reject) => {
        child.on('error', () => reject());
        child.on('close', (code) => resolve(code));
        child.on('exit', (code) => resolve(code));
    })
        .then(async (exit) => {
        const timeoput = setTimeout(() => { }, 2000);
        await Promise.any([
            timeoput,
            waitOutputCompletion
        ]);
        return exit;
    });
}


/***/ }),

/***/ 410:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.logLines = logLines;
function logLines(...args) {
    console.log(args.join('\n'));
}


/***/ }),

/***/ 293:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getUnityPath = getUnityPath;
function getUnityPath(platform, version) {
    if (platform === 'windows') {
        return `C:\\Program Files\\Unity\\Hub\\Editor\\${version}\\Editor\\Unity.exe`;
    }
    throw new Error(`Unsupported platform. Please specify 'windows' as platform`);
}


/***/ }),

/***/ 560:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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


/***/ }),

/***/ 81:
/***/ ((module) => {

module.exports = require("child_process");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateVariables = exports.getUnityPath = exports.logLines = exports.runCommand = void 0;
var command_1 = __nccwpck_require__(208);
Object.defineProperty(exports, "runCommand", ({ enumerable: true, get: function () { return command_1.runCommand; } }));
var log_1 = __nccwpck_require__(410);
Object.defineProperty(exports, "logLines", ({ enumerable: true, get: function () { return log_1.logLines; } }));
var unity_1 = __nccwpck_require__(293);
Object.defineProperty(exports, "getUnityPath", ({ enumerable: true, get: function () { return unity_1.getUnityPath; } }));
var validate_1 = __nccwpck_require__(560);
Object.defineProperty(exports, "validateVariables", ({ enumerable: true, get: function () { return validate_1.validateVariables; } }));

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=index.js.map