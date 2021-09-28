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
exports.POST_TYPE = void 0;
const CustomError_1 = __importDefault(require("../../models/CustomError"));
const IdGenerator_1 = require("../../services/IdGenerator");
var POST_TYPE;
(function (POST_TYPE) {
    POST_TYPE["NORMAL"] = "normal";
    POST_TYPE["EVENTO"] = "evento";
})(POST_TYPE = exports.POST_TYPE || (exports.POST_TYPE = {}));
class PostBusiness {
    constructor(postDatabase) {
        this.postDatabase = postDatabase;
    }
    createPost(postDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                postDTO.postId = new IdGenerator_1.IdGenerator().generateId();
                const postId = yield this.postDatabase.createPost(postDTO);
                return postId;
            }
            catch (err) {
                throw new CustomError_1.default("Internal Error", 500, [
                    "Something went wrong on create post",
                    err.message
                ]);
            }
        });
    }
    getPostById(postId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = yield this.postDatabase.getPostById(postId);
                if (!post) {
                    throw new CustomError_1.default("Not Found", 404, "Post Not Found");
                }
                post[0].createdAt = new Date(post[0].createdAt).toISOString();
                return post[0];
            }
            catch (err) {
                throw new CustomError_1.default("Internal Error", 500, [
                    "Something went wrong on get post",
                    err.message
                ]);
            }
        });
    }
}
exports.default = PostBusiness;
//# sourceMappingURL=PostBusiness.js.map