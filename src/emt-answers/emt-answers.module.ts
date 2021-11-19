import { Module } from "@nestjs/common"
import { EmtAnswersService } from "./emt-answers.service"
import { EmtAnswersController } from "./emt-answers.controller"
import { MongooseModule } from "@nestjs/mongoose"
import { EmtAnswer, EmtAnswerSchema } from "./schemas/emt-answer.schema"

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: EmtAnswer.name, schema: EmtAnswerSchema },
    ]),
  ],
  controllers: [EmtAnswersController],
  providers: [EmtAnswersService],
})
export class EmtAnswersModule {}
