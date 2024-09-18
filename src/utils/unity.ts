export function getUnityPath(platform: string, version: string): string {
    if (platform === 'windows') {
        return `C:\\Program Files\\Unity\\Hub\\Editor\\${version}\\Editor\\Unity.exe`;
    } 
    throw new Error(`Unsupported platform. Please specify 'windows' as platform`);
}