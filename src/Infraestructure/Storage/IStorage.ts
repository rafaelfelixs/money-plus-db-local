export interface IStorage<T> {
  save(entity: T): Promise<T>;

  update(id: string | number, entity: T): Promise<T>;

  delete(id: string | number): Promise<void>;

  findById(id: string | number): Promise<T>;

  findAll(page?: number, pageSize?: number): Promise<T[]>;
}
