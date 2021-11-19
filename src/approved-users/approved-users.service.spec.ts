import { Test, TestingModule } from "@nestjs/testing"
import { ApprovedUsersService } from "./approved-users.service"

describe("ApprovedUsersService", () => {
  let service: ApprovedUsersService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApprovedUsersService],
    }).compile()

    service = module.get<ApprovedUsersService>(ApprovedUsersService)
  })

  it("should be defined", () => {
    expect(service).toBeDefined()
  })
})
