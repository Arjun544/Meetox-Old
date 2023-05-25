import { UploadApiResponse } from "cloudinary";
import { withFilter } from "graphql-subscriptions/dist/with-filter";
import { IncomingMessage } from "http";
import Circle from "../../models/circle_model";
import { uploadImage } from "../../services/storage_services";
import { decodeToken } from "../../services/token_services";
import { ICircle } from "../../utils/interfaces/circle";
import { GraphQLContext } from "../../utils/types";

const resolvers = {
  Mutation: {
    addCircle: async (_: any, args: any, context: GraphQLContext) => {
      const { req } = context;
      const { name, description, image, isPrivate, limit, location, members } =
        args;
      const { id, token } = decodeToken(req as IncomingMessage);

      const results: string | UploadApiResponse = await uploadImage(
        "Circles Profiles",
        image
      );

      const response: UploadApiResponse = results as UploadApiResponse;

      const circle: ICircle | null = await Circle.create({
        name,
        description,
        image: {
          image: response.secure_url,
          imageId: response.public_id,
        },
        admin: id,
        isPrivate,
        limit,
        location,
        members,
      });

      return circle;
    },
  },
  //   Query: {
  //     getUser: async (_: any, args: any, context: GraphQLContext) => {
  //       const { req } = context;
  //       const { id, token } = decodeToken(req as IncomingMessage);

  //       const user: IUser | null = await User.findById(id).select(
  //         "email name display_pic isPremium location createdAt"
  //       );

  //       return user;
  //     },
  //   },
  //   Subscription: {
  //     locationUpdated: {
  //       subscribe: withFilter(
  //         (_: any, __: any, context: GraphQLContext) => {
  //           const { pubsub } = context;

  //           return pubsub.asyncIterator(["LOCATION_UPDATED"]);
  //         },
  //         (payload: any, _, context: GraphQLContext) => {
  //           return true;
  //         }
  //       ),
  //     },
  //   },
};

export default resolvers;