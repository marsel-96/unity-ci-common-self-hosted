import { spawn } from 'child_process';

export function runCommand(command: string, args: string[]): Promise<number> {
    let child = spawn(command, args)

    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);

    return new Promise<number>((resolve, reject) => {
        child.on('error', () => reject());
        child.on('close', (code: number) => resolve(code));
        child.on('exit', (code: number) => resolve(code));
    });
}