import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { ApprovedUsersService } from "./approved-users.service"
import { ApprovedUsersController } from "./approved-users.controller"
import {
  ApprovedUser,
  ApprovedUserSchema,
} from "./schemas/approved-user.schema"

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ApprovedUser.name, schema: ApprovedUserSchema },
    ]),
  ],
  controllers: [ApprovedUsersController],
  providers: [ApprovedUsersService],
})
export class ApprovedUsersModule {}
