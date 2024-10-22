import { Test, TestingModule } from '@nestjs/testing';
import { CatService } from './cat.service';
import { GetAllCatsRequest } from '../../dtos/cats/getallcats.request'
import { GetAllCatsResponse } from '../../dtos/cats/getallcats.response';
import { CreateCatRequest } from '../../dtos/cats/createcat.request';
import { CreateCatResponse } from '../../dtos/cats/createcat.response';
import { v4 as uuid } from 'uuid';

describe('CatService', () => {
  let service: CatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatService, GetAllCatsResponse],
    }).compile();

    service = module.get<CatService>(CatService);
  });

  describe('getallcats', () => {
    it('should return GetAllCatsResponse equals to []', () => {
      let request = new GetAllCatsRequest();
      let response = new GetAllCatsResponse(request.CorrelationId());
      response.cats = [];
      expect(service.GetAllCatsAsync(request)).toStrictEqual(response);
    });
  });

  describe('createcat', () => {
    it('should return CreateCatResponse equals not null', () => {
      let request = new CreateCatRequest();
      let uuidcat = uuid();
      request.cat = { id: uuidcat, name: "michi", age: 4, color: 'white', type: 'default' };
      let responsec = new CreateCatResponse(request.CorrelationId());
      responsec.cat = { id: uuidcat, name: "michi", age: 4, color: 'white', type: 'default' };
      expect(service.CreateCatAsync(request)).toStrictEqual(responsec);
    });
  });
});
