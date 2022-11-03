/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlace = /* GraphQL */ `
  subscription OnCreatePlace(
    $filter: ModelSubscriptionPlaceFilterInput
    $owner: String
  ) {
    onCreatePlace(filter: $filter, owner: $owner) {
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
export const onUpdatePlace = /* GraphQL */ `
  subscription OnUpdatePlace(
    $filter: ModelSubscriptionPlaceFilterInput
    $owner: String
  ) {
    onUpdatePlace(filter: $filter, owner: $owner) {
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
export const onDeletePlace = /* GraphQL */ `
  subscription OnDeletePlace(
    $filter: ModelSubscriptionPlaceFilterInput
    $owner: String
  ) {
    onDeletePlace(filter: $filter, owner: $owner) {
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
export const onCreateMenuGroup = /* GraphQL */ `
  subscription OnCreateMenuGroup(
    $filter: ModelSubscriptionMenuGroupFilterInput
    $owner: String
  ) {
    onCreateMenuGroup(filter: $filter, owner: $owner) {
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
export const onUpdateMenuGroup = /* GraphQL */ `
  subscription OnUpdateMenuGroup(
    $filter: ModelSubscriptionMenuGroupFilterInput
    $owner: String
  ) {
    onUpdateMenuGroup(filter: $filter, owner: $owner) {
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
export const onDeleteMenuGroup = /* GraphQL */ `
  subscription OnDeleteMenuGroup(
    $filter: ModelSubscriptionMenuGroupFilterInput
    $owner: String
  ) {
    onDeleteMenuGroup(filter: $filter, owner: $owner) {
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
