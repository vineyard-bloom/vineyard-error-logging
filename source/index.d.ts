import { Collection, Modeler } from "vineyard-ground";
export interface ErrorRecord {
    message: string;
    stack?: string;
    code?: number;
    key?: string;
}
export declare class StandardErrorLogger {
    errorCollection: Collection<Error>;
    constructor(errorCollection: Collection<Error>);
    logError(error: ErrorRecord): Promise<any>;
}
export declare function initializeErrorLogSchema(modeler: Modeler): void;
