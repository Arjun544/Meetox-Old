import gql from "graphql-tag";

const typeDefs = gql`
  scalar Date
  scalar ICircle
  scalar ILocation

  type Query {
    getNearByCircles(
      latitude: Float!
      longitude: Float!
      distanceInKM: Float!
    ): [ICircle]
  }

  type Query {
    userCircles(name: String, page: Int!, limit: Int!): CirclesResponse
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
    circles: [ICircle]
  }
`;

export default typeDefs;
