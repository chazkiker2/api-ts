import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"
import * as mongoose from "mongoose"
import { User } from "src/users/schemas/user.schema"

export type PostDocument = Post & Document

@Schema({ toJSON: { getters: true } })
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

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    get: (usersLiked: string) => {
      return usersLiked[0].split(" ").filter((x) => x)
    },
  })
  usersLiked: User[]

  @Prop({ required: true })
  date: Date

  @Prop({ default: 0 })
  status: number

  @Prop({ default: "pending" })
  statusName: "pending" | "approved" | "deleted"
}

export const PostSchema = SchemaFactory.createForClass(Post)
