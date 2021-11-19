import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { ConfigModule } from "@nestjs/config"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { UsersModule } from "./users/users.module"
import { ApprovedUsersModule } from "./approved-users/approved-users.module"
import { EmtAnswersModule } from "./emt-answers/emt-answers.module"
import { PromptsModule } from "./prompts/prompts.module"

@Module({
  //   imports: [MongooseModule.forRoot("mongodb://localhost/test"), UsersModule],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    UsersModule,
    ApprovedUsersModule,
    EmtAnswersModule,
    PromptsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
