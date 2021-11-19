import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { CreatePromptDto } from "./dto/create-prompt.dto"
import { UpdatePromptDto } from "./dto/update-prompt.dto"
import { Prompt, PromptDocument } from "./schema/prompt.schema"

@Injectable()
export class PromptsService {
  constructor(
    @InjectModel(Prompt.name) private promptModel: Model<PromptDocument>,
  ) {}

  async create(createPromptDto: CreatePromptDto): Promise<Prompt> {
    return this.promptModel.create(createPromptDto)
  }

  async findAll(): Promise<Prompt[]> {
    return this.promptModel.find().exec()
  }

  async findOne(id: number): Promise<Prompt> {
    return this.promptModel.findById(id).exec()
  }

  async update(id: number, updatePromptDto: UpdatePromptDto): Promise<Prompt> {
    return this.promptModel.findByIdAndUpdate(id, updatePromptDto).exec()
  }

  async remove(id: number): Promise<Prompt> {
    return this.promptModel.findByIdAndDelete(id).exec()
  }
}
