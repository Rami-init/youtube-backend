import { ObjectType, Field } from "type-graphql";
import { User } from "./user.schema";
import { Video } from "./video.schema";
import { Vote } from "./vote.schema";

@ObjectType()
export class Comment {
  @Field()
  id!: string;

  @Field()
  content!: string;

  @Field()
  createAt!: Date;

  @Field()
  updatedAt!: Date;

  @Field(() => User, { nullable: true })
  auther?: User | null;

  @Field(() => User, { nullable: true })
  autherId?: string | null;

  @Field(() => Video, { nullable: true })
  video?: Video | null;

  @Field(() => Video, { nullable: true })
  videoId?: string | null;

  @Field(() => [Vote], { nullable: true })
  votes?: Vote[] | null;

  @Field(() => [Comment], { nullable: true })
  replies?: Comment[] | null;

  @Field(() => Comment, { nullable: true })
  parentComment?: Comment | null;

  @Field(() => Comment, { nullable: true })
  parentCommentId?: string | null;

  @Field(() => User, { nullable: true })
  repliesUser?: User | null;

  @Field(() => User, { nullable: true })
  repliesUserId?: string | null;
}
