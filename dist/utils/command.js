"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCommand = runCommand;
const child_process_1 = require("child_process");
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
//# sourceMappingURL=command.js.map