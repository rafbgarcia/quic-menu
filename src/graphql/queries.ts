/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlace = /* GraphQL */ `
  query GetPlace($id: ID!) {
    getPlace(id: $id) {
      owner
      name
      category
      about
      menuGroups {
        items {
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
          id
          createdAt
          updatedAt
          placeMenuGroupsId
          owner
        }
        nextToken
      }
      id
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
        owner
        name
        category
        about
        menuGroups {
          items {
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
            id
            createdAt
            updatedAt
            placeMenuGroupsId
            owner
          }
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMenuGroup = /* GraphQL */ `
  query GetMenuGroup($id: ID!) {
    getMenuGroup(id: $id) {
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
      id
      createdAt
      updatedAt
      placeMenuGroupsId
      owner
    }
  }
`;
export const listMenuGroups = /* GraphQL */ `
  query ListMenuGroups(
    $filter: ModelMenuGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenuGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        id
        createdAt
        updatedAt
        placeMenuGroupsId
        owner
      }
      nextToken
    }
  }
`;
