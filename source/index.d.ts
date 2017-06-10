import { Collection, Modeler } from "vineyard-ground";
export interface ErrorRecord {
    message: string;
    stack?: string;
    code?: number;
    key?: string;
}
export interface ErrorLogger {
    logError(error: ErrorRecord): Promise<any> | void;
}
export declare class ConsoleErrorLogger implements ErrorLogger {
    logError(error: any): void;
}
export declare class StandardErrorLogger implements ErrorLogger {
    errorCollection: Collection<Error>;
    constructor(errorCollection: Collection<Error>);
    logError(error: ErrorRecord): Promise<any>;
}
export declare function initializeErrorLogSchema(modeler: Modeler): void;
