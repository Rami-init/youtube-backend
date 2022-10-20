"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Comment_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const type_graphql_1 = require("type-graphql");
const user_schema_1 = require("./user.schema");
const video_schema_1 = require("./video.schema");
const vote_schema_1 = require("./vote.schema");
let Comment = Comment_1 = class Comment {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Comment.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Comment.prototype, "content", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], Comment.prototype, "createAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], Comment.prototype, "updatedAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => user_schema_1.User, { nullable: true }),
    __metadata("design:type", Object)
], Comment.prototype, "auther", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => user_schema_1.User, { nullable: true }),
    __metadata("design:type", Object)
], Comment.prototype, "autherId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => video_schema_1.Video, { nullable: true }),
    __metadata("design:type", Object)
], Comment.prototype, "video", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => video_schema_1.Video, { nullable: true }),
    __metadata("design:type", Object)
], Comment.prototype, "videoId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [vote_schema_1.Vote], { nullable: true }),
    __metadata("design:type", Object)
], Comment.prototype, "votes", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Comment_1], { nullable: true }),
    __metadata("design:type", Object)
], Comment.prototype, "replies", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Comment_1, { nullable: true }),
    __metadata("design:type", Object)
], Comment.prototype, "parentComment", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Comment_1, { nullable: true }),
    __metadata("design:type", Object)
], Comment.prototype, "parentCommentId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => user_schema_1.User, { nullable: true }),
    __metadata("design:type", Object)
], Comment.prototype, "repliesUser", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => user_schema_1.User, { nullable: true }),
    __metadata("design:type", Object)
], Comment.prototype, "repliesUserId", void 0);
Comment = Comment_1 = __decorate([
    (0, type_graphql_1.ObjectType)()
], Comment);
exports.Comment = Comment;
//# sourceMappingURL=comment.schema.js.map