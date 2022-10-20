import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import { ContextInfer } from "../../config";
import { CreateUser, User } from "../../schema/user.schema";

@Resolver()
export class UserMutation {
  @Mutation(() => User)
  async createUser(
    @Arg("input") input: CreateUser,
    @Ctx() { prisma, req }: ContextInfer
  ): Promise<User> {
    return await prisma.user.create({
      data: {
        ...input,
      },
    });
  }
}
