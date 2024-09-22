require('./sourcemap-register.js');/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 144:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__nccwpck_require__(208), exports);
__exportStar(__nccwpck_require__(410), exports);
__exportStar(__nccwpck_require__(293), exports);
__exportStar(__nccwpck_require__(560), exports);
__exportStar(__nccwpck_require__(881), exports);


/***/ }),

/***/ 881:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 208:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.runCommand = runCommand;
const child_process_1 = __nccwpck_require__(81);
const logging = __importStar(__nccwpck_require__(410));
async function runCommand(command, args) {
    let child = (0, child_process_1.spawn)(command, args);
    child.stdout.pipe(process.stdout);
    child.stderr.on('data', function (data) {
        logging.logWithStyle('stderr: ' + data);
    });
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
exports.ForegroundColor = exports.TextEffect = void 0;
exports.log = log;
exports.logWithStyle = logWithStyle;
exports.error = error;
exports.startGroup = startGroup;
exports.endGroup = endGroup;
exports.warn = warn;
exports.logLines = logLines;
const ColorReset = "\x1b[0m";
var TextEffect;
(function (TextEffect) {
    TextEffect["Bright"] = "\u001B[1m";
    TextEffect["Dim"] = "\u001B[2m";
    TextEffect["Underscore"] = "\u001B[4m";
    TextEffect["Blink"] = "\u001B[5m";
    TextEffect["Reverse"] = "\u001B[7m";
    TextEffect["Hidden"] = "\u001B[8m";
    TextEffect["None"] = "";
})(TextEffect || (exports.TextEffect = TextEffect = {}));
var ForegroundColor;
(function (ForegroundColor) {
    ForegroundColor["Black"] = "\u001B[30m";
    ForegroundColor["Red"] = "\u001B[31m";
    ForegroundColor["Green"] = "\u001B[32m";
    ForegroundColor["Yellow"] = "\u001B[33m";
    ForegroundColor["Blue"] = "\u001B[34m";
    ForegroundColor["Magenta"] = "\u001B[35m";
    ForegroundColor["Cyan"] = "\u001B[36m";
    ForegroundColor["White"] = "\u001B[37m";
})(ForegroundColor || (exports.ForegroundColor = ForegroundColor = {}));
const errorPrefix = "::error::";
const warningPrefix = "::warning::";
const startGroupPrefix = "::group::";
const endGroupPrefix = "::endgroup::";
function log(message) {
    console.log(message);
}
function logWithStyle(message, color = ForegroundColor.White, effect = TextEffect.None) {
    console.log(effect + color + message + ColorReset);
}
function error(message) {
    console.log(errorPrefix + message);
}
function startGroup(title) {
    console.log(startGroupPrefix + title);
}
function endGroup(message) {
    console.log(endGroupPrefix);
}
function warn(message) {
    console.log(warningPrefix + message);
}
function logLines(...args) {
    console.log(args.join('\n'));
}


/***/ }),

/***/ 293:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getUnityPath = getUnityPath;
exports.getUnityPathFromProject = getUnityPathFromProject;
exports.getUnityPathOrDefault = getUnityPathOrDefault;
const fs_1 = __nccwpck_require__(147);
const path_1 = __nccwpck_require__(17);
function getUnityPath(platform, version) {
    if (platform === 'windows') {
        const unityFullPath = `C:\\Program Files\\Unity\\Hub\\Editor\\${version}\\Editor\\Unity.exe`;
        if ((0, fs_1.existsSync)(unityFullPath)) {
            return unityFullPath;
        }
        else
            throw new Error(`Unity not found at ${unityFullPath}`);
    }
    throw new Error(`Unsupported platform. Please specify 'windows' as platform`);
}
function getUnityPathFromProject(platform, unityProjectPath) {
    const projectVersionFullPath = (0, path_1.join)(unityProjectPath, 'ProjectSettings', 'ProjectVersion.txt');
    const data = (0, fs_1.readFileSync)(projectVersionFullPath, { encoding: 'utf8' });
    for (const line of data.split('\n')) {
        if (line.startsWith('m_EditorVersion:')) {
            const version = line.split(':')[1].trim();
            return getUnityPath(platform, version);
        }
    }
    throw new Error('Unity version not found in ProjectVersion.txt');
}
function getUnityPathOrDefault(path, defaultPath) {
    if (!path) {
        return defaultPath;
    }
    if ((0, path_1.isAbsolute)(path)) {
        return path;
    }
    else {
        return (0, path_1.join)(defaultPath, path);
    }
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

/***/ }),

/***/ 147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 17:
/***/ ((module) => {

module.exports = require("path");

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
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nccwpck_require__(144);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map