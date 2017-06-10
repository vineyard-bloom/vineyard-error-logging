"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConsoleErrorLogger = (function () {
    function ConsoleErrorLogger() {
    }
    ConsoleErrorLogger.prototype.logError = function (error) {
        console.error(error.stack || error.message);
    };
    return ConsoleErrorLogger;
}());
exports.ConsoleErrorLogger = ConsoleErrorLogger;
var StandardErrorLogger = (function () {
    function StandardErrorLogger(errorCollection) {
        this.errorCollection = errorCollection;
    }
    StandardErrorLogger.prototype.logError = function (error) {
        var message = error.stack ? error.stack : error.message;
        if (error.code)
            console.error("Error", error.code, message);
        else
            console.error("Error", message);
        var record = {
            message: error.message,
            stack: error.stack || null,
            code: error.code || null,
            key: error.key || null
        };
        return this.errorCollection.create(record);
    };
    return StandardErrorLogger;
}());
exports.StandardErrorLogger = StandardErrorLogger;
function initializeErrorLogSchema(modeler) {
    modeler.addDefinitions(require('./schema/errors.json'));
}
exports.initializeErrorLogSchema = initializeErrorLogSchema;
//# sourceMappingURL=index.js.map