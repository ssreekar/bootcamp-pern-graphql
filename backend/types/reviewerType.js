import { gql } from "apollo-server-express";

const reviewerType = gql`
  type Reviewer {
    id: ID!
    firstName: String!
    lastName: String!
    location: String
    Age: Int
  }

  extend type Query {
    reviewer(id: ID!): Reviewer
    reviewers: [Reviewer!]!
  }

  extend type Mutation {
    createReviewer(
      firstName: String!
      lastName: String!
      location: String
      Age: Int
    ): Reviewer
    updateReviewer(
      ID: ID!
      firstName: String!
      lastName: String!
      location: String
      Age: Int
    ): Reviewer
    deleteReviewer(id: ID!): ID
  }
`;

export default reviewerType;
