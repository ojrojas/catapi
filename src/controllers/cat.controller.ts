import { Body, Controller, Get, Inject, Post, Query, Req } from "@nestjs/common";
import { CreateCatRequest } from "src/core/dtos/cats/createcat.request";
import { CreateCatResponse } from "src/core/dtos/cats/createcat.response";
import { GetAllCatsRequest } from "src/core/dtos/cats/getallcats.request";
import { GetAllCatsResponse } from "src/core/dtos/cats/getallcats.response";
import { CatService } from "src/core/services/cat/cat.service";
import { ICatService } from "src/core/services/cat/icat.service";

@Controller()
export class CatController {
    constructor(@Inject(CatService) private readonly catService: ICatService) { }

    @Get('/cats')
    GetAllCats(@Query()request: GetAllCatsRequest): GetAllCatsResponse {
        return this.catService.GetAllCatsAsync(request);
    }

    @Post('/cats')
    CreateCat(@Body() request: CreateCatRequest): CreateCatResponse {
        return this.catService.CreateCatAsync(request);
    }
}