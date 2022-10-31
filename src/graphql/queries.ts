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
        items {
          name
          price
          discountPrice
          description
          images {
            small
            medium
            large
          }
          hide
          hideFromDelivery
          minimumAge
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPlaces = /* GraphQL */ `
  query ListPlaces(
    $filter: ModelPlaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        category
        about
        menu {
          name
          items {
            name
            price
            discountPrice
            description
            images {
              small
              medium
              large
            }
            hide
            hideFromDelivery
            minimumAge
          }
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
