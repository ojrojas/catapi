import { Injectable } from '@nestjs/common';
import { ICatService } from './icat.service';
import { CreateCatRequest } from './../../dtos/cats/createcat.request';
import { CreateCatResponse } from './../../dtos/cats/createcat.response';
import { ICat } from './../../models/cat.model';
import { GetAllCatsResponse } from './../../dtos/cats/getallcats.response';

@Injectable()
export class CatService implements ICatService {
    
    GetCatsByIdsAsync(ids: []): GetAllCatsResponse {
        let result =  this.cats.filter((x) => {
            return this.cats.indexOf(x) != -1;
        });

        let response = new GetAllCatsResponse();
        response.cats = result;
        return response;
    }

    cats: ICat[] = [];

    GetCatByIdAsync(id: string): ICat {
        return this.cats.find(x => x.id === id);
    }

    GetAllCatsAsync(): GetAllCatsResponse {
        let response = new GetAllCatsResponse();
        response.cats = this.cats;
        return response;
    }

    UpdateCatAsync(cat: ICat): ICat {
        let index = this.cats.findIndex(x => x.id == cat.id);
        this.cats[index] = cat;
        return cat;
    }

    DeleteCatAsync(id: string): boolean {
        let index = this.cats.findIndex(x => x.id == id);
        this.cats.splice(index, 1);
        return true;
    }

    CreateCatAsync(request: CreateCatRequest): CreateCatResponse {
        let response = new CreateCatResponse();
        this.cats.push(request.cat);
        response.cat = request.cat;

        return response;
    }

}
