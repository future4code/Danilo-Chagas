"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomError extends Error {
    constructor(message, code, tips) {
        super(message);
        this.message = message;
        this.code = code;
        this.tips = tips;
    }
}
exports.default = CustomError;
//# sourceMappingURL=CustomError.js.map