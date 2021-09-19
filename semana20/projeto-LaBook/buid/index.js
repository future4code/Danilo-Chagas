"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const UserController_1 = __importDefault(require("./controllers/UserController/UserController"));
const PostController_1 = __importDefault(require("./controllers/PostController/PostController"));
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
const userController = new UserController_1.default();
app.post("/user/signup", (req, res) => userController.signup(req, res));
app.post("/user/login", (req, res) => userController.login(req, res));
const postController = new PostController_1.default;
app.post("/post", (req, res) => postController.createPost(req, res));
app.get("/post/:postId", (req, res) => postController.getPostbyId(req, res));
//# sourceMappingURL=index.js.map