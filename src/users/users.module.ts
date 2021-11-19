import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { UsersService } from "./users.service"
import { UsersController } from "./users.controller"
import { User, UserSchema } from "./schemas/user.schema"

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          const schema = UserSchema
          console.log({ schema })
          schema.pre("save", function () {
            console.log({ schema })
          })
          schema.virtual("progress_v2").get(function () {
            console.log(this)
            console.log(this.progress)
            return ""
          })
          return schema
        },
      },
    ]),
    // MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
