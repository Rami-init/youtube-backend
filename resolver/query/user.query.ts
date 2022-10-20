import { Query, Ctx, Resolver } from "type-graphql";
import { ContextInfer } from "../../config";
import { User } from "../../schema/user.schema";

@Resolver()
export default class UserResolver {
  @Query(() => [User])
  async users(@Ctx() { prisma }: ContextInfer): Promise<User[]> {
    return await prisma.user.findMany();
  }

  @Query(() => User, { nullable: true })
  async me(@Ctx() { prisma, req }: ContextInfer): Promise<User | null> {
    console.log(req.session.userId);
    const user = await prisma.user.findUnique({
      where: {
        id: req.session.userId || "",
      },
    });
    return user || null;
  }
}
