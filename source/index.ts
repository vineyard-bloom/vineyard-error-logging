import {Collection, Modeler} from "vineyard-ground"

export interface Error {
  message: string
  stack?: string
  code?: number
}

export class StandardErrorLogger {
  errorCollection: Collection<Error>

  constructor(errorCollection: Collection<Error>) {
    this.errorCollection = errorCollection;
  }

  logError(error: Error): Promise<any> {
    return this.errorCollection.create(error)
  }
}

export function initializeErrorLogSchema(modeler: Modeler) {
  modeler.addDefinitions(require('./schema/errors.json'))
}