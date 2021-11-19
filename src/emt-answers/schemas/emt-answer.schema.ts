import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

export type EmtAnswerDocument = EmtAnswer & Document

@Schema()
export class EmtAnswer {
  @Prop({ required: true })
  quizId: string

  @Prop({ required: true })
  userId: string

  @Prop({ required: true })
  answers: string

  @Prop({ default: new Date() })
  timeCompleted: Date
}

export const EmtAnswerSchema = SchemaFactory.createForClass(EmtAnswer)
