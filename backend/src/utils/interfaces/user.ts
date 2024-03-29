import { Document } from "mongoose";

export interface ISession extends Document {
  token: string;
  user: string;
  address: string;
  expires: Date;
  createdAt: Date;
}

export interface IUser extends Document {
  id: string;
  name: string;
  email: string;
  display_pic: IDisplayPic;
  birthDate: Date;
  isPremium: boolean;
  isOnline: boolean;
  passwordlessToken: string;
  passwordlessTokenExpires: Date;
  whatsAppToken: string;
  whatsAppTokenExpires: Date;
  socials: ISocialLink;
  location: ILocation;
  createdAt: Date;
  updatedAt: Date;
}

export interface IDisplayPic {
  profile: string;
  profileId: string;
}
export interface ISocialLink extends IUser {
  name: string;
  url: string;
}
export interface ILocation {
  address: string;
  coordinates: [number];
}
