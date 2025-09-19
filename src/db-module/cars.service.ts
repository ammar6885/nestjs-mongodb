import { Injectable } from '@nestjs/common';
import { DbConnectService } from './conn.service';
import { ObjectId } from 'mongodb';
import { Car } from 'src/models';

@Injectable()
export class CarsService {
  constructor(private conn: DbConnectService) {}

  private get col() {
    return this.conn.db.collection<Omit<Car, '_id'>>('cars');
  }

  getAll() {
    return this.col.find({}).toArray();
  }

  getCar(id: string) {
    return this.col.findOne({ _id: new ObjectId(id) });
  }

  getCarsByOwner(owner: string) {
    return this.col.find({ owner }).toArray();
  }

  async create(data: Omit<Car, '_id'>) {
    const res = await this.col.insertOne(data);

    return {
      _id: res.insertedId,
      ...data,
    } as Car;
  }
}
