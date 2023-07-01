import { Document } from "mongoose";
import { ILocation, IUser } from "./user";
import { IAnswer } from "./answer";

export interface IQuestion extends Document {
  question: string;
  answers: [IAnswer];
  admin: IUser;
  upvotes: [IVote];
  downvotes: [IVote];
  expiry: Date;
  location: ILocation;
  createdAt: Date;
  updatedAt: Date;
}

export interface IVote {
  votes: number;
  user: IUser;
}
