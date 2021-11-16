export interface BaseRepositoryInterface<T> {
    delete(t: T): Promise<any>;
    exists(t: T): Promise<boolean>;
    save(t: T): Promise<T>;
}
