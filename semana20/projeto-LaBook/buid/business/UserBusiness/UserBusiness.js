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
const Authenticator_1 = require("../../services/Authenticator");
const HashManager_1 = require("../../services/HashManager");
const IdGenerator_1 = require("../../services/IdGenerator");
class UserBusiness {
    constructor(userDatabase) {
        this.userDatabase = userDatabase;
        this.hashManager = new HashManager_1.HashManager();
        this.authenticator = new Authenticator_1.Authenticator();
    }
    signUp(signUpDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const generetedId = new IdGenerator_1.IdGenerator().generateId();
            const hashedPassword = yield this.hashManager.hash(signUpDTO.password);
            const user = yield this.userDatabase.findByEmail(signUpDTO.email);
            if (user) {
                throw new CustomError_1.default("Denied register", 406, `An user already registered with email '${signUpDTO.email}'`);
            }
            else {
                const userModel = {
                    id: generetedId,
                    email: signUpDTO.email,
                    name: signUpDTO.name,
                    hashedPassword: hashedPassword
                };
                yield this.userDatabase.saveToDatabase(userModel);
                const token = this.authenticator.generateToken({ id: userModel.id });
                return {
                    token: token
                };
            }
        });
    }
    login(loginDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = loginDTO;
            try {
                const credential = yield this.userDatabase.findCredential(loginDTO);
                if (!credential) {
                    throw new CustomError_1.default("Invalid credential", 401, "Invalid 'e-mail' or 'password'");
                }
                const isValidPassword = yield this.hashManager.compare(password, credential.hashedPassword);
                if (!isValidPassword) {
                    throw new CustomError_1.default("Invalid credential", 401, "Invalid 'e-mail' or 'password'");
                }
                const token = this.authenticator.generateToken({ id: credential.id });
                return {
                    token: token
                };
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = UserBusiness;
//# sourceMappingURL=UserBusiness.js.map