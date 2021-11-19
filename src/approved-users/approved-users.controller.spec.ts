import { Test, TestingModule } from "@nestjs/testing"
import { ApprovedUsersController } from "./approved-users.controller"
import { ApprovedUsersService } from "./approved-users.service"

describe("ApprovedUsersController", () => {
  let controller: ApprovedUsersController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApprovedUsersController],
      providers: [ApprovedUsersService],
    }).compile()

    controller = module.get<ApprovedUsersController>(ApprovedUsersController)
  })

  it("should be defined", () => {
    expect(controller).toBeDefined()
  })
})
