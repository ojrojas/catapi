import { Injectable } from '@nestjs/common';
import { ICatService } from './icat.service';
import { CreateCatRequest } from 'src/core/dtos/cats/createcat.request';
import { CreateCatResponse } from 'src/core/dtos/cats/createcat.response';
import { ICat } from 'src/core/models/cat.model';
import { GetAllCatsRequest } from 'src/core/dtos/cats/getallcats.request';
import { GetAllCatsResponse } from 'src/core/dtos/cats/getallcats.response';

@Injectable()
export class CatService implements ICatService {

    cats: ICat[]= [];

    GetCatByIdAsync(id: string): ICat {
        throw new Error('Method not implemented.');
    }
    GetAllCatsAsync(request: GetAllCatsRequest): GetAllCatsResponse {
        let response = new GetAllCatsResponse(request.CorrelationId());
        response.cats = this.cats;
        return response;
    }
    UpdateCatAsync(cat: ICat): ICat {
        throw new Error('Method not implemented.');
    }
    DeleteCatAsync(id: string): boolean {
        throw new Error('Method not implemented.');
    }
    CreateCatAsync(request: CreateCatRequest): CreateCatResponse {
        let response = new CreateCatResponse(request.CorrelationId());
        this.cats.push(request.cat);
        response.cat = request.cat;

        return response;
    }

}
