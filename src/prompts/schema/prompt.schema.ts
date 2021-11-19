import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

export type PromptDocument = Prompt & Document

@Schema()
export class Prompt {
  @Prop({ required: true })
  question: string

  @Prop({ default: new Date() })
  dateCreated: Date
}

export const PromptSchema = SchemaFactory.createForClass(Prompt)
