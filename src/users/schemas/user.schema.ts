import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

export type UserDocument = User & Document

@Schema({ toJSON: { getters: true } })
export class User {
  @Prop({ required: true })
  firstName: string

  @Prop({ required: true })
  lastName: string

  @Prop({ required: true })
  email: string

  @Prop({ required: true })
  password: string

  @Prop({ default: "" })
  bio: string

  @Prop({ default: "" })
  prompts: string

  @Prop({ default: "" })
  linkedIn: string

  @Prop({ default: "" })
  website: string

  @Prop({ default: "none" })
  group: string

  @Prop({ default: 0 })
  points: number

  @Prop({ default: "" })
  logins: string

  @Prop({ default: null })
  emtAnswered?: Date

  @Prop({ default: "Placeholder-Image.png" })
  awsImageName: string

  @Prop({ default: "" })
  resetUrl: string

  @Prop({ default: "unprivileged" })
  permission: string

  @Prop({
    get: (progress: string) => {
      const split = progress[0].split(" ")
      const ret = []
      const entry = ["", -1]
      for (let i = 0; i < split.length; i++) {
        const x = split[i]
        if (!x) {
          continue
        }
        if (i % 2 === 0) {
          entry[0] = split[i]
        } else {
          entry[1] = +split[i]
          ret.push([...entry])
        }
      }
      return ret
    },
  })
  progress: Array<[string, number]>

  @Prop({ default: "" })
  savedOpportunities: string
}

export const UserSchema = SchemaFactory.createForClass(User)
UserSchema.virtual("progress_v2").get(function () {
  console.log(this)
  console.log(this.progress)
  return ""
})
