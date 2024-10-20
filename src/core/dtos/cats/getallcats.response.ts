import { ICat } from "src/core/models/cat.model";
import { BaseResponse } from "../base/base.response";

export class GetAllCatsResponse extends BaseResponse {
    constructor(correlationId: string) {
        super(correlationId);
    }

    cats: ICat[];
}