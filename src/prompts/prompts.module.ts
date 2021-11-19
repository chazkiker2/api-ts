import { Module } from "@nestjs/common"
import { PromptsService } from "./prompts.service"
import { PromptsController } from "./prompts.controller"
import { Prompt, PromptSchema } from "./schema/prompt.schema"
import { MongooseModule } from "@nestjs/mongoose"

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Prompt.name, schema: PromptSchema }]),
  ],
  controllers: [PromptsController],
  providers: [PromptsService],
})
export class PromptsModule {}
