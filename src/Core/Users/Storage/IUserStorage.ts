import { IStorage } from '../../../Infraestructure/Storage/IStorage';
import { Users } from '../../../Infraestructure/Entities/Users';

export interface IUserStorage extends IStorage<Users> {
  findByEmail(email: string): Promise<Users>;
  findById(id: string): Promise<Users>;
}
