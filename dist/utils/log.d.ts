export declare enum TextEffect {
    Bright = "\u001B[1m",
    Dim = "\u001B[2m",
    Underscore = "\u001B[4m",
    Blink = "\u001B[5m",
    Reverse = "\u001B[7m",
    Hidden = "\u001B[8m",
    None = ""
}
export declare enum ForegroundColor {
    Black = "\u001B[30m",
    Red = "\u001B[31m",
    Green = "\u001B[32m",
    Yellow = "\u001B[33m",
    Blue = "\u001B[34m",
    Magenta = "\u001B[35m",
    Cyan = "\u001B[36m",
    White = "\u001B[37m"
}
export declare function log(message: string): void;
export declare function logWithStyle(message: string, color?: ForegroundColor, effect?: TextEffect): void;
export declare function error(message: string): void;
export declare function startGroup(title: string): void;
export declare function endGroup(message: string): void;
export declare function warn(message: string): void;
export declare function logLines(...args: string[]): void;
