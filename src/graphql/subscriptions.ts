/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlace = /* GraphQL */ `
  subscription OnCreatePlace($filter: ModelSubscriptionPlaceFilterInput) {
    onCreatePlace(filter: $filter) {
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
export const onUpdatePlace = /* GraphQL */ `
  subscription OnUpdatePlace($filter: ModelSubscriptionPlaceFilterInput) {
    onUpdatePlace(filter: $filter) {
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
export const onDeletePlace = /* GraphQL */ `
  subscription OnDeletePlace($filter: ModelSubscriptionPlaceFilterInput) {
    onDeletePlace(filter: $filter) {
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
