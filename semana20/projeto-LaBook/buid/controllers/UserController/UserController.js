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
const UserBusiness_1 = __importDefault(require("../../business/UserBusiness/UserBusiness"));
const SQLUserDatabase_1 = __importDefault(require("../../data/UserDatabase/SQLUserDatabase"));
class UserController {
    constructor() {
        this.userBusiness = new UserBusiness_1.default(new SQLUserDatabase_1.default());
    }
    signup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const signupDTO = {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                };
                const getToken = yield this.userBusiness.signUp(signupDTO);
                return res.status(201).send(getToken).end();
            }
            catch (err) {
                return res
                    .status(err.code || 500)
                    .send({
                    message: err.message || "Internal Error",
                    error: err.tips || "Somenthing went wrong"
                })
                    .end();
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const loginDTO = {
                    email: req.body.email,
                    password: req.body.password
                };
                const getToken = yield this.userBusiness.login(loginDTO);
                return res.status(201).send(getToken).end();
            }
            catch (err) {
                return res
                    .status(err.code || 500)
                    .send({
                    message: err.message || "Internal Error",
                    error: err.tips || "Somenthing went wrong"
                })
                    .end();
            }
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map