"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUnityPath = getUnityPath;
function getUnityPath(platform, version) {
    if (platform === 'windows') {
        return `C:\\Program Files\\Unity\\Hub\\Editor\\${version}\\Editor\\Unity.exe`;
    }
    throw new Error(`Unsupported platform. Please specify 'windows' as platform`);
}
//# sourceMappingURL=unity.js.map