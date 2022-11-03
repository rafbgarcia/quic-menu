/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlace = /* GraphQL */ `
  mutation CreatePlace(
    $input: CreatePlaceInput!
    $condition: ModelPlaceConditionInput
  ) {
    createPlace(input: $input, condition: $condition) {
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
export const updatePlace = /* GraphQL */ `
  mutation UpdatePlace(
    $input: UpdatePlaceInput!
    $condition: ModelPlaceConditionInput
  ) {
    updatePlace(input: $input, condition: $condition) {
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
export const deletePlace = /* GraphQL */ `
  mutation DeletePlace(
    $input: DeletePlaceInput!
    $condition: ModelPlaceConditionInput
  ) {
    deletePlace(input: $input, condition: $condition) {
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
export const createMenuGroup = /* GraphQL */ `
  mutation CreateMenuGroup(
    $input: CreateMenuGroupInput!
    $condition: ModelMenuGroupConditionInput
  ) {
    createMenuGroup(input: $input, condition: $condition) {
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
export const updateMenuGroup = /* GraphQL */ `
  mutation UpdateMenuGroup(
    $input: UpdateMenuGroupInput!
    $condition: ModelMenuGroupConditionInput
  ) {
    updateMenuGroup(input: $input, condition: $condition) {
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
export const deleteMenuGroup = /* GraphQL */ `
  mutation DeleteMenuGroup(
    $input: DeleteMenuGroupInput!
    $condition: ModelMenuGroupConditionInput
  ) {
    deleteMenuGroup(input: $input, condition: $condition) {
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
