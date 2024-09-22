

const ColorReset = "\x1b[0m";

export enum TextEffect {
    Bright = "\x1b[1m",
    Dim = "\x1b[2m",
    Underscore = "\x1b[4m",
    Blink = "\x1b[5m",
    Reverse = "\x1b[7m",
    Hidden = "\x1b[8m",
    None = ""
}

export enum ForegroundColor {
    Black = "\x1b[30m",
    Red = "\x1b[31m",
    Green = "\x1b[32m",
    Yellow = "\x1b[33m",
    Blue = "\x1b[34m",
    Magenta = "\x1b[35m",
    Cyan = "\x1b[36m",
    White = "\x1b[37m",
}

const errorPrefix = "::error::"
const warningPrefix = "::warning::"
const startGroupPrefix = "::group::"
const endGroupPrefix = "::endgroup::"

export function log(message: string): void {
    console.log(message);
}

export function logWithStyle(
    message: string, 
    color: ForegroundColor = ForegroundColor.White, 
    effect: TextEffect = TextEffect.None
): void {
    console.log(effect + color + message + ColorReset);
}

export function error(message: string): void {
    console.log(errorPrefix + message);
}

export function startGroup(title: string): void {
    console.log(startGroupPrefix + title);
}

export function endGroup(message: string): void {
    console.log(endGroupPrefix);
}

export function warn(message: string): void {
    console.log(warningPrefix + message);
}

export function logLines(...args: string[]) {
    console.log(args.join('\n'));
}