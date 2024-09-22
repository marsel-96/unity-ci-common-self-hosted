import { readFileSync, existsSync } from 'fs';
import { join, isAbsolute } from 'path';

export function getUnityPath(platform: string, version: string): string {
    if (platform === 'windows') {
        const unityFullPath = `C:\\Program Files\\Unity\\Hub\\Editor\\${version}\\Editor\\Unity.exe`;
        if (existsSync(unityFullPath)) {
            return unityFullPath;
        }
        else throw new Error(`Unity not found at ${unityFullPath}`);
    }
    throw new Error(`Unsupported platform. Please specify 'windows' as platform`);
}

export function getUnityPathFromProject(platform: string, unityProjectPath: string): string {
    const projectVersionFullPath = join(unityProjectPath, 'ProjectSettings', 'ProjectVersion.txt');

    const data = readFileSync(projectVersionFullPath, { encoding: 'utf8' });
    for (const line of data.split('\n')) {
        if (line.startsWith('m_EditorVersion:')) {
            const version = line.split(':')[1].trim();
            return getUnityPath(platform, version);
        }
    }
    throw new Error('Unity version not found in ProjectVersion.txt');
}

export function getUnityPathOrDefault(path: string, defaultPath: string): string {
    if (!path) {
        return defaultPath;
    }

    if (isAbsolute(path)) {
        return path;
    } else {
        return join(defaultPath, path);
    }
}