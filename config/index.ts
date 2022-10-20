import { Request, Response } from "express";
import { Session } from "express-session";
import { PrismaClient } from "@prisma/client";

export const prisma: PrismaClient = new PrismaClient();

export type ContextInfer = {
  req: Request & {
    session: Session & {
      userId?: string;
    };
  };
  prisma: PrismaClient;
  res: Response;
};
