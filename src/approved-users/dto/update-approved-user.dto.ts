import { PartialType } from "@nestjs/mapped-types"
import { CreateApprovedUserDto } from "./create-approved-user.dto"

export class UpdateApprovedUserDto extends PartialType(CreateApprovedUserDto) {}
