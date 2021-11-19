import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { CreateEmtAnswerDto } from "./dto/create-emt-answer.dto"
import { UpdateEmtAnswerDto } from "./dto/update-emt-answer.dto"
import { EmtAnswer, EmtAnswerDocument } from "./schemas/emt-answer.schema"

@Injectable()
export class EmtAnswersService {
  constructor(
    @InjectModel(EmtAnswer.name)
    private emtAnswerModel: Model<EmtAnswerDocument>,
  ) {}

  async create(createEmtAnswerDto: CreateEmtAnswerDto): Promise<EmtAnswer> {
    return this.emtAnswerModel.create(createEmtAnswerDto)
  }

  async findAll(): Promise<EmtAnswer[]> {
    return this.emtAnswerModel.find().exec()
  }

  async findOne(id: number): Promise<EmtAnswer> {
    return this.emtAnswerModel.findById(id).exec()
  }

  async update(
    id: number,
    updateEmtAnswerDto: UpdateEmtAnswerDto,
  ): Promise<EmtAnswer> {
    return this.emtAnswerModel.findByIdAndUpdate(id, updateEmtAnswerDto).exec()
  }

  async remove(id: number): Promise<UpdateEmtAnswerDto> {
    return this.emtAnswerModel.findByIdAndDelete(id)
  }
}
