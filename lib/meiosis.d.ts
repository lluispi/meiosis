export declare type UpdateFunction = (model: any) => any;
export declare type ViewFunction = (model: any) => any;
export interface Mapper<A, B> {
    (value: A): B;
}
export interface Stream<T> {
    (): T;
    (value: T): Stream<T>;
    map<T, R>(mapper: Mapper<T, R>): Stream<R>;
}
export interface Scanner<A, B> {
    (acc: A, next: B): A;
}
export interface TraceParameters<M> {
    update: Stream<any>;
    dataStreams: Array<Stream<any>>;
    otherStreams?: Array<Stream<any>>;
    toJS?: Function;
    fromJS?: Function;
}
export declare function applyUpdate<M>(model: M, update: Function): any;
export declare function isMeiosisTracerOn(): boolean;
export declare function trace<M>(params: TraceParameters<M>): void;
