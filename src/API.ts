/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePlaceInput = {
  id?: string | null,
  name: string,
  category?: string | null,
  about?: string | null,
  menu?: Array< MenuGroupInput | null > | null,
};

export type MenuGroupInput = {
  name: string,
  items?: Array< MenuItemInput | null > | null,
};

export type MenuItemInput = {
  name: string,
  price: number,
  discountPrice?: number | null,
  description?: string | null,
  images?: ItemImagesInput | null,
  hide?: boolean | null,
  hideFromDelivery?: boolean | null,
  minimumAge?: number | null,
};

export type ItemImagesInput = {
  small?: string | null,
  medium?: string | null,
  large?: string | null,
};

export type ModelPlaceConditionInput = {
  name?: ModelStringInput | null,
  category?: ModelStringInput | null,
  about?: ModelStringInput | null,
  and?: Array< ModelPlaceConditionInput | null > | null,
  or?: Array< ModelPlaceConditionInput | null > | null,
  not?: ModelPlaceConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Place = {
  __typename: "Place",
  id: string,
  name: string,
  category?: string | null,
  about?: string | null,
  menu?:  Array<MenuGroup | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type MenuGroup = {
  __typename: "MenuGroup",
  name: string,
  items?:  Array<MenuItem | null > | null,
};

export type MenuItem = {
  __typename: "MenuItem",
  name: string,
  price: number,
  discountPrice?: number | null,
  description?: string | null,
  images?: ItemImages | null,
  hide?: boolean | null,
  hideFromDelivery?: boolean | null,
  minimumAge?: number | null,
};

export type ItemImages = {
  __typename: "ItemImages",
  small?: string | null,
  medium?: string | null,
  large?: string | null,
};

export type UpdatePlaceInput = {
  id: string,
  name?: string | null,
  category?: string | null,
  about?: string | null,
  menu?: Array< MenuGroupInput | null > | null,
};

export type DeletePlaceInput = {
  id: string,
};

export type ModelPlaceFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  category?: ModelStringInput | null,
  about?: ModelStringInput | null,
  and?: Array< ModelPlaceFilterInput | null > | null,
  or?: Array< ModelPlaceFilterInput | null > | null,
  not?: ModelPlaceFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelPlaceConnection = {
  __typename: "ModelPlaceConnection",
  items:  Array<Place | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionPlaceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  about?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPlaceFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlaceFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreatePlaceMutationVariables = {
  input: CreatePlaceInput,
  condition?: ModelPlaceConditionInput | null,
};

export type CreatePlaceMutation = {
  createPlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    category?: string | null,
    about?: string | null,
    menu?:  Array< {
      __typename: "MenuGroup",
      name: string,
      items?:  Array< {
        __typename: "MenuItem",
        name: string,
        price: number,
        discountPrice?: number | null,
        description?: string | null,
        images?:  {
          __typename: "ItemImages",
          small?: string | null,
          medium?: string | null,
          large?: string | null,
        } | null,
        hide?: boolean | null,
        hideFromDelivery?: boolean | null,
        minimumAge?: number | null,
      } | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlaceMutationVariables = {
  input: UpdatePlaceInput,
  condition?: ModelPlaceConditionInput | null,
};

export type UpdatePlaceMutation = {
  updatePlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    category?: string | null,
    about?: string | null,
    menu?:  Array< {
      __typename: "MenuGroup",
      name: string,
      items?:  Array< {
        __typename: "MenuItem",
        name: string,
        price: number,
        discountPrice?: number | null,
        description?: string | null,
        images?:  {
          __typename: "ItemImages",
          small?: string | null,
          medium?: string | null,
          large?: string | null,
        } | null,
        hide?: boolean | null,
        hideFromDelivery?: boolean | null,
        minimumAge?: number | null,
      } | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlaceMutationVariables = {
  input: DeletePlaceInput,
  condition?: ModelPlaceConditionInput | null,
};

export type DeletePlaceMutation = {
  deletePlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    category?: string | null,
    about?: string | null,
    menu?:  Array< {
      __typename: "MenuGroup",
      name: string,
      items?:  Array< {
        __typename: "MenuItem",
        name: string,
        price: number,
        discountPrice?: number | null,
        description?: string | null,
        images?:  {
          __typename: "ItemImages",
          small?: string | null,
          medium?: string | null,
          large?: string | null,
        } | null,
        hide?: boolean | null,
        hideFromDelivery?: boolean | null,
        minimumAge?: number | null,
      } | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPlaceQueryVariables = {
  id: string,
};

export type GetPlaceQuery = {
  getPlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    category?: string | null,
    about?: string | null,
    menu?:  Array< {
      __typename: "MenuGroup",
      name: string,
      items?:  Array< {
        __typename: "MenuItem",
        name: string,
        price: number,
        discountPrice?: number | null,
        description?: string | null,
        images?:  {
          __typename: "ItemImages",
          small?: string | null,
          medium?: string | null,
          large?: string | null,
        } | null,
        hide?: boolean | null,
        hideFromDelivery?: boolean | null,
        minimumAge?: number | null,
      } | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlacesQueryVariables = {
  filter?: ModelPlaceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlacesQuery = {
  listPlaces?:  {
    __typename: "ModelPlaceConnection",
    items:  Array< {
      __typename: "Place",
      id: string,
      name: string,
      category?: string | null,
      about?: string | null,
      menu?:  Array< {
        __typename: "MenuGroup",
        name: string,
        items?:  Array< {
          __typename: "MenuItem",
          name: string,
          price: number,
          discountPrice?: number | null,
          description?: string | null,
          images?:  {
            __typename: "ItemImages",
            small?: string | null,
            medium?: string | null,
            large?: string | null,
          } | null,
          hide?: boolean | null,
          hideFromDelivery?: boolean | null,
          minimumAge?: number | null,
        } | null > | null,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePlaceSubscriptionVariables = {
  filter?: ModelSubscriptionPlaceFilterInput | null,
};

export type OnCreatePlaceSubscription = {
  onCreatePlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    category?: string | null,
    about?: string | null,
    menu?:  Array< {
      __typename: "MenuGroup",
      name: string,
      items?:  Array< {
        __typename: "MenuItem",
        name: string,
        price: number,
        discountPrice?: number | null,
        description?: string | null,
        images?:  {
          __typename: "ItemImages",
          small?: string | null,
          medium?: string | null,
          large?: string | null,
        } | null,
        hide?: boolean | null,
        hideFromDelivery?: boolean | null,
        minimumAge?: number | null,
      } | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlaceSubscriptionVariables = {
  filter?: ModelSubscriptionPlaceFilterInput | null,
};

export type OnUpdatePlaceSubscription = {
  onUpdatePlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    category?: string | null,
    about?: string | null,
    menu?:  Array< {
      __typename: "MenuGroup",
      name: string,
      items?:  Array< {
        __typename: "MenuItem",
        name: string,
        price: number,
        discountPrice?: number | null,
        description?: string | null,
        images?:  {
          __typename: "ItemImages",
          small?: string | null,
          medium?: string | null,
          large?: string | null,
        } | null,
        hide?: boolean | null,
        hideFromDelivery?: boolean | null,
        minimumAge?: number | null,
      } | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlaceSubscriptionVariables = {
  filter?: ModelSubscriptionPlaceFilterInput | null,
};

export type OnDeletePlaceSubscription = {
  onDeletePlace?:  {
    __typename: "Place",
    id: string,
    name: string,
    category?: string | null,
    about?: string | null,
    menu?:  Array< {
      __typename: "MenuGroup",
      name: string,
      items?:  Array< {
        __typename: "MenuItem",
        name: string,
        price: number,
        discountPrice?: number | null,
        description?: string | null,
        images?:  {
          __typename: "ItemImages",
          small?: string | null,
          medium?: string | null,
          large?: string | null,
        } | null,
        hide?: boolean | null,
        hideFromDelivery?: boolean | null,
        minimumAge?: number | null,
      } | null > | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
