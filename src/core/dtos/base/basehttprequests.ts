import { v4 as uuid } from 'uuid';

export class BaseMessage {
    protected _correlationId: string = uuid();
    public CorrelationId(): string {
        return this._correlationId;
    }
}
