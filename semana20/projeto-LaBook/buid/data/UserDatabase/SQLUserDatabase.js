"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomError_1 = __importDefault(require("../../models/CustomError"));
const connection_1 = __importDefault(require("../connection"));
class SQLUserDatabase {
    constructor() {
        this.userDatabase = "s20_labook_users";
        this.passwordDatabase = "s20_labook_passwords";
    }
    saveToDatabase(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield (0, connection_1.default)(this.userDatabase);
                return res;
            }
            catch (err) {
                throw new CustomError_1.default("Internal Error", 500, err.message);
            }
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield (0, connection_1.default)(this.userDatabase)
                    .select("*")
                    .where({ "email": email });
                return res ? res : null;
            }
            catch (err) {
                throw new CustomError_1.default("Internal Error", 500, err.message);
            }
        });
    }
}
exports.default = SQLUserDatabase;
//# sourceMappingURL=SQLUserDatabase.js.map