"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const home_1 = __importDefault(require("@routes/pages/home"));
const trails_1 = __importDefault(require("@routes/pages/trails"));
const about_1 = __importDefault(require("@routes/pages/about"));
const login_1 = __importDefault(require("@routes/pages/login"));
const root_1 = __importDefault(require("@routes/pages/root"));
const signup_1 = __importDefault(require("@routes/pages/signup"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/", root_1.default);
app.use("/home", home_1.default);
app.use("/trails", trails_1.default);
app.use("/about", about_1.default);
app.use("/login", login_1.default);
app.use("/signup", signup_1.default);
app.use((req, res) => {
    console.error(`Cannot find ${req.originalUrl}`);
    res.status(404).send('Page not found');
});
exports.default = app;
