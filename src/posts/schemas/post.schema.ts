import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

export type PostDocument = Post & Document

@Schema()
export class Post {
  @Prop({ required: true })
  userId: string

  @Prop({ required: true })
  sessionId: string

  @Prop({ default: "" })
  originalPost: string

  @Prop({ required: true })
  userName: string

  @Prop({ required: true })
  comment: string

  @Prop({ default: "" })
  usersLiked: string

  @Prop({ required: true })
  date: Date

  @Prop({ default: 0 })
  status: number

  @Prop({ default: "pending" })
  statusName: "pending" | "approved" | "deleted"
}

export const PostSchema = SchemaFactory.createForClass(Post)
