/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlace = /* GraphQL */ `
  query GetPlace($id: ID!) {
    getPlace(id: $id) {
      id
      name
      category
      about
      menu {
        name
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
