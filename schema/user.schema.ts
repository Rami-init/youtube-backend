import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  MinLength,
} from "class-validator";
import { Field, InputType, ObjectType } from "type-graphql";
import { Comment } from "./comment.schema";
import { Histroy } from "./history.schema";
import { Video } from "./video.schema";
import { Vote } from "./vote.schema";
@ObjectType()
export class User {
  @Field()
  id!: string;

  @Field()
  username!: string;

  @Field()
  email!: string;

  @Field()
  dispalyName!: string;

  @Field()
  verified!: boolean;

  @Field(() => String, { nullable: true })
  description?: string | null;

  @Field(() => String, { nullable: true })
  pic?: string | null;

  @Field(() => String, { nullable: true })
  banner?: string | null;

  @Field()
  location!: string;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;

  @Field(() => [Histroy], { nullable: true })
  history?: Histroy[] | null;

  @Field(() => [Video], { nullable: true })
  videos?: Video[] | null;

  @Field(() => [Vote], { nullable: true })
  votes?: Vote[] | null;

  @Field(() => [Comment], { nullable: true })
  comments?: Comment[] | null;

  @Field(() => [Comment], { nullable: true })
  replies?: Comment[] | null;

  @Field(() => [Video], { nullable: true })
  seeLater?: Video[] | null;
}

@InputType()
export class CreateUser {
  @IsNotEmpty()
  @IsString()
  @Field()
  id!: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @Field()
  username!: string;

  @IsNotEmpty()
  @IsEmail("please provide the valid email")
  @Field()
  email!: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @Field()
  dispalyName!: string;

  @IsNotEmpty()
  @IsBoolean()
  @Field()
  verified!: boolean;

  @IsOptional()
  @IsString()
  @Length(8, 160)
  @Field(() => String, { nullable: true })
  description!: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  pic?: string | null;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  banner?: string | null;

  @IsOptional()
  @IsString()
  @Field()
  location!: string;
}
