import { IncomingMessage } from "http";
import Follow from "../../models/follow_model";
import { decodeToken } from "../../services/token_services";
import { GraphQLContext } from "../../utils/types";

const resolvers = {
  Mutation: {
    follow: async (_: any, args: any, context: GraphQLContext) => {
      const { req } = context;
      const { id: followingId } = args;
      const { id, token } = decodeToken(req as IncomingMessage);
      const follow = new Follow({
        follower: id,
        following: followingId,
      });
      await follow.save();
      return follow;
    },
    unFollow: async (_: any, args: any, context: GraphQLContext) => {
      const { req } = context;
      const { id: followingId } = args;
      const { id, token } = decodeToken(req as IncomingMessage);
      const follow = await Follow.findOneAndDelete({
        follower: id,
        following: followingId,
      });
      return follow !== null;
    },
  },
  Query: {
    isFollowed: async (_: any, args: any, context: GraphQLContext) => {
      const { req } = context;
      const { id: followingId } = args;
      const { id, token } = decodeToken(req as IncomingMessage);
      const follow = await Follow.findOne({
        follower: id,
        following: followingId,
      });
      return follow !== null;
    },
  },
};

export default resolvers;
