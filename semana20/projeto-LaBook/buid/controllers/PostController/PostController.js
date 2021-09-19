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
const PostBusiness_1 = __importDefault(require("../../business/PostBusiness/PostBusiness"));
const SQLPostDatabase_1 = __importDefault(require("../../data/PostDatabase/SQLPostDatabase"));
const CustomError_1 = __importDefault(require("../../models/CustomError"));
const Authenticator_1 = require("../../services/Authenticator");
class PostController {
    constructor() {
        this.postBusiness = new PostBusiness_1.default(new SQLPostDatabase_1.default);
    }
    createPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = new Authenticator_1.Authenticator().decodeTokenData(req.headers.authorization);
                const postDTO = {
                    userId: token.id,
                    description: req.body.description,
                    imageLink: req.body.imageLink,
                    postType: req.body.postType,
                    createdAt: Number(new Date())
                };
                const getPostId = yield this.postBusiness.createPost(postDTO);
                return res
                    .status(200)
                    .send({ postId: getPostId })
                    .end();
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
    getPostbyId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.params.postId) {
                throw new CustomError_1.default("Invalid or missing value", 400, "'postId' is needed to 'get' request");
            }
            try {
                const post = yield this.postBusiness.getPostById(req.params.postId);
                return res.status(200).send(post).end();
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
exports.default = PostController;
//# sourceMappingURL=PostController.js.map