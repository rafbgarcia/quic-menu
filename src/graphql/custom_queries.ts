/* tslint:disable */
/* eslint-disable */

export const getPlace = /* GraphQL */ `
  query GetPlace($id: ID!) {
    getPlace(id: $id) {
      id
      name
      category
      about
      menu {
        name
        items {
          name
          price
          description
          images {
            small
          }
        }
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
