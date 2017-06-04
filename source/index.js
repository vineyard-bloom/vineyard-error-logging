"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StandardErrorLogger = (function () {
    function StandardErrorLogger(errorCollection) {
        this.errorCollection = errorCollection;
    }
    StandardErrorLogger.prototype.logError = function (error) {
        return this.errorCollection.create(error);
    };
    return StandardErrorLogger;
}());
exports.StandardErrorLogger = StandardErrorLogger;
function initializeErrorLogSchema(modeler) {
    modeler.addDefinitions(require('./schema/errors.json'));
}
exports.initializeErrorLogSchema = initializeErrorLogSchema;
//# sourceMappingURL=index.js.map