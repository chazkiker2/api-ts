import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

export type ApprovedUserDocument = ApprovedUser & Document

@Schema()
export class ApprovedUser {
  @Prop({ required: true })
  email: string

  @Prop({ required: true, default: "none" })
  group: string

  @Prop({ default: new Date() })
  accountCreated: Date

  @Prop({ required: true })
  urlString: string
}

export const ApprovedUserSchema = SchemaFactory.createForClass(ApprovedUser)
