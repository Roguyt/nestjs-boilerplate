export interface BaseModelInterface<T> {
    toDTO(): T;
    toPersistance(): any;
}
