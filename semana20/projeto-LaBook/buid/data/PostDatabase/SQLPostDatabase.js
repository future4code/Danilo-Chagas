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
class SQLPostDatabase {
    constructor() {
        this.postDatabase = "s20_labook_posts";
        this.userDatabase = "s20_labook_users";
    }
    createPost(postDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = {
                    id: postDTO.postId,
                    user_id: postDTO.userId,
                    description: postDTO.description,
                    create_date: postDTO.createdAt,
                    img_link: postDTO.imageLink,
                    postType: postDTO.postType
                };
                yield (0, connection_1.default)(this.postDatabase)
                    .insert(post);
                return postDTO.postId;
            }
            catch (err) {
                throw new CustomError_1.default("Server service error", 500, err.sqlMessage || "Something went wrong on create post");
            }
        });
    }
    getPostById(postId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = yield (0, connection_1.default)(this.postDatabase)
                    .select({
                    postId: `${this.postDatabase}.id`,
                    userId: 'user_id',
                    userName: `${this.userDatabase}.name`,
                    description: 'description',
                    createdAt: 'create_date',
                    imageLink: 'img_link',
                    postType: 'postType'
                })
                    .join(this.userDatabase, `${this.postDatabase}.user_id`, `${this.userDatabase}.id`)
                    .where({ [`${this.postDatabase}.id`]: postId });
                return post;
            }
            catch (err) {
                throw new CustomError_1.default("Server service error", 500, err.sqlMessage || "Something went wrong on create post");
            }
        });
    }
}
exports.default = SQLPostDatabase;
//# sourceMappingURL=SQLPostDatabase.js.map