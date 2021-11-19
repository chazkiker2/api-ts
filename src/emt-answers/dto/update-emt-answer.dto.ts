import { PartialType } from "@nestjs/mapped-types"
import { CreateEmtAnswerDto } from "./create-emt-answer.dto"

export class UpdateEmtAnswerDto extends PartialType(CreateEmtAnswerDto) {}
