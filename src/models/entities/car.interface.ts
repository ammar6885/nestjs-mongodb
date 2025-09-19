import { ObjectId } from "mongodb";

export interface Car {
  _id: ObjectId;
  owner: string;
  name: string;
  model: number;
}