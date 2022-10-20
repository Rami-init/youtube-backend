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
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const apollo_server_express_1 = require("apollo-server-express");
const connect_redis_1 = __importDefault(require("connect-redis"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const type_graphql_1 = require("type-graphql");
const ioredis_1 = __importDefault(require("ioredis"));
const colors_1 = __importDefault(require("colors"));
const config_1 = require("./config");
const githubLogin_1 = require("./utils/githubLogin");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = (0, express_1.default)();
    const RedisStore = (0, connect_redis_1.default)(express_session_1.default);
    const client = new ioredis_1.default();
    app.set("trust proxy", true);
    app.use((0, cors_1.default)({
        credentials: true,
        origin: ["http://localhost:3000", "https://studio.apollographql.com"],
    }));
    app.use((0, express_session_1.default)({
        name: "qid",
        store: new RedisStore({ client, disableTouch: true }),
        cookie: {
            httpOnly: true,
            sameSite: "lax",
            secure: false,
            maxAge: 100 * 60 * 60 * 24 * 100,
        },
        saveUninitialized: false,
        secret: process.env.SECRET_JWT,
        resave: false,
    }));
    yield (0, githubLogin_1.withGithub)(app, config_1.prisma);
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: yield (0, type_graphql_1.buildSchema)({
            validate: false,
            resolvers: [__dirname + "/resolver/**/*.js"],
        }),
        context: ({ req, res }) => ({ req, res, prisma: config_1.prisma }),
    });
    yield apolloServer.start();
    apolloServer.applyMiddleware({
        app,
        path: "/api",
        cors: false,
    });
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
        console.log(colors_1.default.bgGreen(`🚀  Server ready at: ${port}`));
    });
});
main();
//# sourceMappingURL=index.js.map