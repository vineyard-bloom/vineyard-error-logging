import { Collection, Modeler } from "vineyard-ground";
export interface Error {
    message: string;
    stack?: string;
    code?: number;
}
export declare class StandardErrorLogger {
    errorCollection: Collection<Error>;
    constructor(errorCollection: Collection<Error>);
    logError(error: Error): Promise<any>;
}
export declare function initializeErrorLogSchema(modeler: Modeler): void;
