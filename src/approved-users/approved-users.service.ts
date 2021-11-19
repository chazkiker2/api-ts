import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { CreateApprovedUserDto } from "./dto/create-approved-user.dto"
import { UpdateApprovedUserDto } from "./dto/update-approved-user.dto"
import {
  ApprovedUser,
  ApprovedUserDocument,
} from "./schemas/approved-user.schema"

@Injectable()
export class ApprovedUsersService {
  constructor(
    @InjectModel(ApprovedUser.name)
    private approvedUserModel: Model<ApprovedUserDocument>,
  ) {}

  async create(
    createApprovedUserDto: CreateApprovedUserDto,
  ): Promise<ApprovedUser> {
    return this.approvedUserModel.create(createApprovedUserDto)
  }

  async findAll(): Promise<ApprovedUser[]> {
    return this.approvedUserModel.find().exec()
  }

  async findOne(id: number): Promise<ApprovedUser> {
    return this.approvedUserModel.findById(id).exec()
  }

  async update(
    id: number,
    updateApprovedUserDto: UpdateApprovedUserDto,
  ): Promise<ApprovedUser> {
    return this.approvedUserModel
      .findByIdAndUpdate(id, updateApprovedUserDto)
      .exec()
  }

  async remove(id: number): Promise<ApprovedUser> {
    return this.approvedUserModel.findByIdAndDelete(id).exec()
  }
}
