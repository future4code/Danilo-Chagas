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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const SQLUserDatabase_1 = __importDefault(require("./data/UserDatabase/SQLUserDatabase"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log("\x1b[42m\x1b[34m%s\x1b[0m", `Server is running in localhost:${address.port}`);
    }
    else {
        console.error("\x1b[41m%s\x1b[0m", `Failure upon starting server`);
    }
});
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sql = new SQLUserDatabase_1.default().findByEmail("teste@teste");
        console.log(sql);
        res.send("ok").end();
    }
    catch (err) {
        console.error(err);
        res.send("nok").end();
    }
}));
//# sourceMappingURL=index.js.map