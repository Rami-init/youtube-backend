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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = exports.User = void 0;
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
const comment_schema_1 = require("./comment.schema");
const history_schema_1 = require("./history.schema");
const video_schema_1 = require("./video.schema");
const vote_schema_1 = require("./vote.schema");
let User = class User {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "dispalyName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], User.prototype, "verified", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "pic", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "banner", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "location", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [history_schema_1.Histroy], { nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "history", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [video_schema_1.Video], { nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "videos", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [vote_schema_1.Vote], { nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "votes", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [comment_schema_1.Comment], { nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "comments", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [comment_schema_1.Comment], { nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "replies", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [video_schema_1.Video], { nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "seeLater", void 0);
User = __decorate([
    (0, type_graphql_1.ObjectType)()
], User);
exports.User = User;
let CreateUser = class CreateUser {
};
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateUser.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(4),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateUser.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)("please provide the valid email"),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateUser.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(4),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateUser.prototype, "dispalyName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], CreateUser.prototype, "verified", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(8, 160),
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CreateUser.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], CreateUser.prototype, "pic", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], CreateUser.prototype, "banner", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateUser.prototype, "location", void 0);
CreateUser = __decorate([
    (0, type_graphql_1.InputType)()
], CreateUser);
exports.CreateUser = CreateUser;
//# sourceMappingURL=user.schema.js.map