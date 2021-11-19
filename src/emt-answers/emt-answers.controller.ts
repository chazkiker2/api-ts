import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common"
import { EmtAnswersService } from "./emt-answers.service"
import { CreateEmtAnswerDto } from "./dto/create-emt-answer.dto"
import { UpdateEmtAnswerDto } from "./dto/update-emt-answer.dto"

@Controller("emt-answers")
export class EmtAnswersController {
  constructor(private readonly emtAnswersService: EmtAnswersService) {}

  @Post()
  create(@Body() createEmtAnswerDto: CreateEmtAnswerDto) {
    return this.emtAnswersService.create(createEmtAnswerDto)
  }

  @Get()
  findAll() {
    return this.emtAnswersService.findAll()
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.emtAnswersService.findOne(+id)
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateEmtAnswerDto: UpdateEmtAnswerDto,
  ) {
    return this.emtAnswersService.update(+id, updateEmtAnswerDto)
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.emtAnswersService.remove(+id)
  }
}
