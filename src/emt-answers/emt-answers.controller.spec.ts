import { Test, TestingModule } from '@nestjs/testing';
import { EmtAnswersController } from './emt-answers.controller';
import { EmtAnswersService } from './emt-answers.service';

describe('EmtAnswersController', () => {
  let controller: EmtAnswersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmtAnswersController],
      providers: [EmtAnswersService],
    }).compile();

    controller = module.get<EmtAnswersController>(EmtAnswersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
