import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common"
import { ApprovedUsersService } from "./approved-users.service"
import { CreateApprovedUserDto } from "./dto/create-approved-user.dto"
import { UpdateApprovedUserDto } from "./dto/update-approved-user.dto"

@Controller("approved-users")
export class ApprovedUsersController {
  constructor(private readonly approvedUsersService: ApprovedUsersService) {}

  @Post()
  create(@Body() createApprovedUserDto: CreateApprovedUserDto) {
    return this.approvedUsersService.create(createApprovedUserDto)
  }

  @Get()
  findAll() {
    return this.approvedUsersService.findAll()
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.approvedUsersService.findOne(+id)
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateApprovedUserDto: UpdateApprovedUserDto,
  ) {
    return this.approvedUsersService.update(+id, updateApprovedUserDto)
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.approvedUsersService.remove(+id)
  }
}
