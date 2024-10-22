import { Injectable, NestMiddleware } from "@nestjs/common";
import {v4 as uuid} from 'uuid';

@Injectable()
export class BaseMessageMiddleware implements NestMiddleware {
    use(req: any, res: any, next: (error?: Error | any) => void) {
        let correlationId = uuid();
        req.headers['x.request.id']= correlationId;
        req.headers['request.datatime'] = process.hrtime();
        var headers = new Headers();
        headers.append("x.request.id", correlationId);
        res.headers = headers;
        
        next();
    }
}