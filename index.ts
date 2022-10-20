import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();
import { ApolloServer } from "apollo-server-express";
import connectRedis from "connect-redis";
import cors from "cors";
import express from "express";
import session from "express-session";
import { buildSchema } from "type-graphql";
import Redis from "ioredis";
import colors from "colors";
import { ContextInfer, prisma } from "./config";
import { withGithub } from "./utils/githubLogin";
const main = async () => {
  const app = express();
  const RedisStore = connectRedis(session);
  const client = new Redis();
  app.set("trust proxy", true);
  app.use(
    cors({
      credentials: true,
      origin: ["http://localhost:3000", "https://studio.apollographql.com"],
    })
  );
  app.use(
    session({
      name: "qid",
      store: new RedisStore({ client, disableTouch: true }),
      cookie: {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
        maxAge: 100 * 60 * 60 * 24 * 100,
      },
      saveUninitialized: false,
      secret: process.env.SECRET_JWT!,
      resave: false,
    })
  );
  await withGithub(app, prisma);
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      validate: false,
      resolvers: [__dirname + "/resolver/**/*.js"],
    }),
    context: ({ req, res }: ContextInfer) => ({ req, res, prisma }),
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    path: "/api",
    cors: false,
  });
  const port = process.env.PORT || 8000;
  app.listen(port, () => {
    console.log(colors.bgGreen(`🚀  Server ready at: ${port}`));
  });
};
main();
