import { Source } from "./source.model";

export class SourcePerArticle {
    object: Source;
    value: number;

    constructor (object: Source, value: number) {
        this.object = object;
        this.value = value;
    }
}