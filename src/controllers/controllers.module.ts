import { Module } from "@nestjs/common";
import { UsecasesModule } from "src/usecases/usecases.module";
import { PostController } from "./post.controller";
import { UserController } from "./users.controller";


@Module({
    imports: [UsecasesModule],
    controllers:[PostController, UserController]
    
  })
  export class ControllersModule {}
  