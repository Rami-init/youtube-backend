import { ObjectType, Field } from "type-graphql";
import { Comment } from "./comment.schema";
import { User } from "./user.schema";
import { Video } from "./video.schema";

@ObjectType()
export class Vote {
  @Field()
  id!: string;

  @Field()
  content!: string;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;

  @Field(() => Video, { nullable: true })
  video?: Video | null;

  @Field(() => User, { nullable: true })
  user?: User | null;

  @Field(() => Comment, { nullable: true })
  comment?: Comment | null;

  @Field(() => Video, { nullable: true })
  videoId?: string | null;

  @Field(() => User, { nullable: true })
  userId?: string | null;

  @Field(() => Comment, { nullable: true })
  commentId?: string | null;
}
