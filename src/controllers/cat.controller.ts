import { Body, Controller, Delete, Get, HttpStatus, Inject, Param, Patch, Post, Query, Req, Res } from "@nestjs/common";
import { CreateCatRequest } from "../core/dtos/cats/createcat.request";
import { CreateCatResponse } from "../core/dtos/cats/createcat.response";
import { GetAllCatsResponse } from "../core/dtos/cats/getallcats.response";
import { ICat } from "../core/models/cat.model";
import { CatService } from "../core/services/cat/cat.service";
import { ICatService } from "../core/services/cat/icat.service";

@Controller('cats')
export class CatController {
    constructor(@Inject(CatService) private readonly catService: ICatService) { }

    @Get()
    GetAllCats(): GetAllCatsResponse {
        return this.catService.GetAllCatsAsync();
    }

    @Get(':id')
    GetCatById(@Param('id')request: string, @Res() res): ICat {
        return this.catService.GetCatByIdAsync(request);
    }

    @Get()
    GetCatsByIds(@Query() ids: string[]): GetAllCatsResponse {
        return this.catService.GetCatsByIdsAsync(ids);
    }

    @Delete(':id')
    DeleteCatById(@Param('id')request: string): boolean {
        return this.catService.DeleteCatAsync(request);
    }

    @Patch()
    UpdateCat(@Body() request: ICat){
        return this.catService.UpdateCatAsync(request);
    }

    @Post()
    CreateCat(@Body() request: CreateCatRequest): CreateCatResponse {
        return this.catService.CreateCatAsync(request);
    }
}