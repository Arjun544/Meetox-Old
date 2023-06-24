import gql from "graphql-tag";

const typeDefs = gql`
  scalar Date
  scalar ICircle
  scalar IUser
  scalar ILocation
  scalar IImage

  type Query {
    getNearByCircles(
      latitude: Float!
      longitude: Float!
      distanceInKM: Float!
    ): [CircleResponse]
    userCircles(name: String, page: Int!, limit: Int!): CirclesResponse
    isMember(id: String!): Boolean
  }

  type Mutation {
    addCircle(
      name: String!
      description: String!
      isPrivate: Boolean!
      limit: Int
      image: String!
      members: [String]!
      location: ILocation
    ): ICircle
    addMember(id: String!): IUser
    leaveMember(id: String!): Boolean
    deleteCircle(id: String!): ICircle
  }

  type CirclesResponse {
    page: Int
    nextPage: Int
    prevPage: Int
    hasNextPage: Boolean
    hasPrevPage: Boolean
    total_pages: Int
    total_results: Int
    circles: [CircleResponse]
  }

  type CircleResponse {
    id: String
    name: String
    description: String
    image: IImage
    location: ILocation
    isPrivate: Boolean
    limit: Int
    admin: String
    members: Int
    createdAt: Date
    updatedAt: Date
  }
`;

export default typeDefs;
