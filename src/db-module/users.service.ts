import { Injectable } from '@nestjs/common';
import { DbConnectService } from './conn.service';
import { ObjectId } from 'mongodb';
import { User } from 'src/models';

@Injectable()
export class UsersService {
  constructor(private conn: DbConnectService) {}

  private get col() {
    return this.conn.db.collection<Omit<User, '_id'>>('users');
  }

  getAll() {
    return this.col.find({}).toArray();
  }

  getUser(id: string) {
    return this.col.findOne({ _id: new ObjectId(id) });
  }

  async add(data: Omit<User, '_id'>) {
    const res = await this.col.insertOne(data);

    return {
      _id: res.insertedId,
      ...data,
    } as User;
  }
}
