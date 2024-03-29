import { Types, Document } from "mongoose";
import { ILocation } from "./user";

export interface ICircle extends Document {
  id: string;
  name: string;
  description: string;
  image: any;
  location: ILocation;
  isPrivate: Boolean;
  limit: Number;
  admin: [Types.ObjectId];
  createdAt: Date;
  updatedAt: Date;
}

export interface IImage {
  image: string;
  imageId: string;
}
