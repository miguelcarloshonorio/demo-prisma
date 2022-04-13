import { Module } from "@nestjs/common";
import { PrismaService } from "src/gateways/database/prisma.service";
import { PostService } from "./post.service";
import { UserService } from "./user.service";


@Module({
    imports: [],
    providers: [UserService, PostService, PrismaService],
    exports: [UserService, PostService],
  })
  export class UsecasesModule {}
  