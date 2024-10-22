import { ArgumentMetadata, PipeTransform } from "@nestjs/common";

export class BaseMessagePipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        throw new Error("Method not implemented.");
    }

}