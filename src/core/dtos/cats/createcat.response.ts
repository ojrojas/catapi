import { ICat } from "src/core/models/cat.model";
import { BaseResponse } from "../base/base.response";

export class CreateCatResponse extends BaseResponse {
    constructor(correlationId: string) {
        super(correlationId);
    }

    cat: ICat;
}