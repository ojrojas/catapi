import { BaseMessage } from './basehttprequests';

export class BaseResponse extends BaseMessage {
    constructor(correlation: string) {
        super()
        this._correlationId = correlation;
    }
}