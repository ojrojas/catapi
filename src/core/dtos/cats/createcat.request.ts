import { ICat } from "src/core/models/cat.model";
import { BaseRequest } from "../base/base.request";

export class CreateCatRequest extends BaseRequest {
    cat:ICat;
}