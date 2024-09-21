import { spawn } from 'child_process';

export async function runCommand(command: string, args: string[]): Promise<number> {
    let child = spawn(command, args)

    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);

    const waitOutputCompletion = new Promise<void>( (resolve, _) => {
        child.stdout.on('end', () => {
            resolve();
        })
    }); 

    return new Promise<number>((resolve, reject) => {
        child.on('error', () => reject());
        child.on('close', (code: number) => resolve(code));
        child.on('exit', (code: number) => resolve(code));
    })
    .then(async (exit) => {
        const timeoput = setTimeout(() => {}, 2000)
        await Promise.any([
            timeoput,
            waitOutputCompletion
        ])
        return exit
    });
}