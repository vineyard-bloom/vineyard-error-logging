import {Collection, Modeler} from "vineyard-ground"

export interface ErrorRecord {
  message: string
  stack?: string
  code?: number
  key?: string
}

export class StandardErrorLogger {
  errorCollection: Collection<Error>

  constructor(errorCollection: Collection<Error>) {
    this.errorCollection = errorCollection;
  }

  logError(error: ErrorRecord): Promise<any> {
    const message = error.stack ? error.stack : error.message
    if (error.code)
      console.error("Error", error.code, message)
    else
      console.error("Error", message)

    const record:ErrorRecord = {
      message: error.message,
      stack: error.stack || null,
      code: error.code || null,
      key: error.key || null
    }
    return this.errorCollection.create(record)
  }
}

export function initializeErrorLogSchema(modeler: Modeler) {
  modeler.addDefinitions(require('./schema/errors.json'))
}