export class ObjectValue<T> {
    object: T;
    value: number;

    constructor (object: T, value: number) {
        this.object = object;
        this.value = value;
    }
}