import { Field, ObjectType } from "type-graphql";
import { User } from "./user.schema";
import { Video } from "./video.schema";

@ObjectType()
export class Histroy {
  @Field()
  id!: string;

  @Field()
  addedAt!: Date;

  @Field(() => User, { nullable: true })
  user?: User | null;

  @Field(() => Video, { nullable: true })
  video?: Video | null;

  @Field(() => User, { nullable: true })
  userId?: string | null;

  @Field(() => Video, { nullable: true })
  videoId?: string | null;
}
