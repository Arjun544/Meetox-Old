import { UploadApiResponse } from "cloudinary";
import { IncomingMessage } from "http";
import User from "../../models/user_model";
import { uploadImage } from "../../services/storage_services";
import { decodeToken } from "../../services/token_services";
import { IUser } from "../../utils/interfaces/user";
import { GraphQLContext } from "../../utils/types";

const resolvers = {
  Mutation: {
    addProfile: async (_: any, args: any, context: GraphQLContext) => {
      const { req } = context;
      const { name, birthDate, profile } = args;
      const { id, token } = decodeToken(req as IncomingMessage);

      const results: string | UploadApiResponse = await uploadImage(
        "User Profiles",
        profile
      );

      const response: UploadApiResponse = results as UploadApiResponse;

      const user: IUser | null = await User.findByIdAndUpdate(
        id,
        {
          name,
          birthDate,
          display_pic: {
            profileId: response.public_id,
            profile: response.secure_url,
          },
        },
        { new: true }
      );

      return user;
    },
  },
  Query: {
    getUser: async (_: any, args: any, context: GraphQLContext) => {
      const { req } = context;
      const { id, token } = decodeToken(req as IncomingMessage);

      const user: IUser | null = await User.findById(id).select(
        "email name display_pic isPremium location createdAt"
      );

      return user;
    },
  },
};

export default resolvers;
