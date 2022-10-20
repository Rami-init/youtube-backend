import { PrismaClient } from "@prisma/client";
import { Application } from "express";
import { Strategy as GithubStrategy, Profile } from "passport-github2";
import passport from "passport";

export const withGithub = (app: Application, prisma: PrismaClient) => {
  passport.use(
    new GithubStrategy(
      {
        clientID: process.env.CLIENT_ID_GITHUB as string,
        clientSecret: process.env.SECRET_ID_GITHUB as string,
        callbackURL: "http://localhost:4000/oauth/github",
        scope: ["user:email"],
      },
      async (acessToken: any, refreshToken: any, profile: any, done: any) => {
        let user = await prisma.user.findUnique({
          where: {
            id: profile.id,
          },
        });
        if (!user) {
          user = await prisma.user.create({
            data: {
              id: profile.id,
              dispalyName: profile.displayName,
              username: profile.username,
              pic: profile.photos[0].value!,
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
      }
    )
  );
  app.get(
    "/auth/github",
    passport.authenticate("github", { session: false, scope: ["user:email"] })
  );
  app.get(
    "/oauth/github",
    passport.authenticate("github", { session: false, scope: ["user:email"] }),
    (req: any, res, next) => {
      req.session.userId = req.user.user.id;
      res.redirect("http://localhost:3000");
    }
  );
};
