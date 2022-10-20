import { Field, ObjectType } from "type-graphql";
import { Comment } from "./comment.schema";
import { Histroy } from "./history.schema";
import { User } from "./user.schema";
import { Vote } from "./vote.schema";

@ObjectType()
export class Video {
  @Field()
  id!: string;

  @Field()
  title!: string;

  @Field()
  file!: string;

  @Field()
  duration!: number;

  @Field()
  views!: number;

  @Field(() => String, { nullable: true })
  description?: string | null;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;

  @Field()
  isPrivate!: boolean;

  @Field()
  likeCount!: number;

  @Field()
  commentCount!: number;

  @Field(() => User, { nullable: true })
  user?: User | null;

  @Field(() => User, { nullable: true })
  userId?: string | null;

  @Field(() => [User], { nullable: true })
  seeLater?: User[];

  @Field(() => [Comment], { nullable: true })
  comments?: Comment[];

  @Field(() => [Histroy], { nullable: true })
  histroy?: Histroy[];

  @Field(() => [Vote], { nullable: true })
  votes?: Vote[];
}
