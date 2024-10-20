import { CreateCatResponse } from 'src/core/dtos/cats/createcat.response';
import { ICat } from '../../models/cat.model';
import { CreateCatRequest } from 'src/core/dtos/cats/createcat.request';
import { GetAllCatsResponse } from 'src/core/dtos/cats/getallcats.response';
import { GetAllCatsRequest } from 'src/core/dtos/cats/getallcats.request';

export interface ICatService {
    GetCatByIdAsync(id: string): ICat;
    GetAllCatsAsync(request: GetAllCatsRequest): GetAllCatsResponse;
    UpdateCatAsync(cat: ICat): ICat;
    DeleteCatAsync(id: string): boolean;
    CreateCatAsync(request: CreateCatRequest): CreateCatResponse;
}