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
exports.withGithub = void 0;
const passport_github2_1 = require("passport-github2");
const passport_1 = __importDefault(require("passport"));
const withGithub = (app, prisma) => {
    passport_1.default.use(new passport_github2_1.Strategy({
        clientID: process.env.CLIENT_ID_GITHUB,
        clientSecret: process.env.SECRET_ID_GITHUB,
        callbackURL: "http://localhost:4000/oauth/github",
        scope: ["user:email"],
    }, (acessToken, refreshToken, profile, done) => __awaiter(void 0, void 0, void 0, function* () {
        let user = yield prisma.user.findUnique({
            where: {
                id: profile.id,
            },
        });
        if (!user) {
            user = yield prisma.user.create({
                data: {
                    id: profile.id,
                    dispalyName: profile.displayName,
                    username: profile.username,
                    pic: profile.photos[0].value,
                    email: profile.emails[0].value,
                    location: profile._json.location,
                },
            });
        }
        return done(null, {
            user,
            refreshToken,
            acessToken,
        });
    })));
    app.get("/auth/github", passport_1.default.authenticate("github", { session: false, scope: ["user:email"] }));
    app.get("/oauth/github", passport_1.default.authenticate("github", { session: false, scope: ["user:email"] }), (req, res, next) => {
        req.session.userId = req.user.user.id;
        res.redirect("http://localhost:3000");
    });
};
exports.withGithub = withGithub;
//# sourceMappingURL=githubLogin.js.map