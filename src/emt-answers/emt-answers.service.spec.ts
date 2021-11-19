import { Test, TestingModule } from "@nestjs/testing"
import { EmtAnswersService } from "./emt-answers.service"

describe("EmtAnswersService", () => {
  let service: EmtAnswersService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmtAnswersService],
    }).compile()

    service = module.get<EmtAnswersService>(EmtAnswersService)
  })

  it("should be defined", () => {
    expect(service).toBeDefined()
  })
})
