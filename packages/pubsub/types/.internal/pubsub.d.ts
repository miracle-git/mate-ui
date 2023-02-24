export default class PubSubClient {
    protected handlers: any;
    constructor();
    on(type: any, handler: any): void;
    emit(): false | undefined;
    off(type: any, handler?: any): void;
}
