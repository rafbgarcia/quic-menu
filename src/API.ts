/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateOrderInput = {
  items: Array< OrderItemInput >,
  status: OrderStatus,
  toGo?: boolean | null,
  meta?: OrderMetadataInput | null,
  id?: string | null,
};

export type OrderItemInput = {
  meta: MenuItemInput,
  quantity: number,
  notes?: string | null,
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

export enum OrderStatus {
  requested = "requested",
  acknowledged = "acknowledged",
  complete = "complete",
}


export type OrderMetadataInput = {
  table?: string | null,
};

export type ModelOrderConditionInput = {
  status?: ModelOrderStatusInput | null,
  toGo?: ModelBooleanInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
};

export type ModelOrderStatusInput = {
  eq?: OrderStatus | null,
  ne?: OrderStatus | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
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


export type Order = {
  __typename: "Order",
  items:  Array<OrderItem >,
  status: OrderStatus,
  toGo?: boolean | null,
  meta?: OrderMetadata | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type OrderItem = {
  __typename: "OrderItem",
  meta: MenuItem,
  quantity: number,
  notes?: string | null,
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

export type OrderMetadata = {
  __typename: "OrderMetadata",
  table?: string | null,
};

export type UpdateOrderInput = {
  items?: Array< OrderItemInput > | null,
  status?: OrderStatus | null,
  toGo?: boolean | null,
  meta?: OrderMetadataInput | null,
  id: string,
};

export type DeleteOrderInput = {
  id: string,
};

export type CreatePlaceInput = {
  owner?: string | null,
  name: string,
  category?: string | null,
  about?: string | null,
  id?: string | null,
};

export type ModelPlaceConditionInput = {
  owner?: ModelStringInput | null,
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
  owner?: string | null,
  name: string,
  category?: string | null,
  about?: string | null,
  menuGroups?: ModelMenuGroupConnection | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelMenuGroupConnection = {
  __typename: "ModelMenuGroupConnection",
  items:  Array<MenuGroup | null >,
  nextToken?: string | null,
};

export type MenuGroup = {
  __typename: "MenuGroup",
  name: string,
  items:  Array<MenuItem >,
  id: string,
  createdAt: string,
  updatedAt: string,
  placeMenuGroupsId?: string | null,
  owner?: string | null,
};

export type UpdatePlaceInput = {
  owner?: string | null,
  name?: string | null,
  category?: string | null,
  about?: string | null,
  id: string,
};

export type DeletePlaceInput = {
  id: string,
};

export type CreateMenuGroupInput = {
  name: string,
  items: Array< MenuItemInput >,
  id?: string | null,
  placeMenuGroupsId?: string | null,
};

export type ModelMenuGroupConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelMenuGroupConditionInput | null > | null,
  or?: Array< ModelMenuGroupConditionInput | null > | null,
  not?: ModelMenuGroupConditionInput | null,
  placeMenuGroupsId?: ModelIDInput | null,
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

export type UpdateMenuGroupInput = {
  name?: string | null,
  items?: Array< MenuItemInput > | null,
  id: string,
  placeMenuGroupsId?: string | null,
};

export type DeleteMenuGroupInput = {
  id: string,
};

export type ModelOrderFilterInput = {
  status?: ModelOrderStatusInput | null,
  toGo?: ModelBooleanInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
};

export type ModelPlaceFilterInput = {
  owner?: ModelStringInput | null,
  name?: ModelStringInput | null,
  category?: ModelStringInput | null,
  about?: ModelStringInput | null,
  and?: Array< ModelPlaceFilterInput | null > | null,
  or?: Array< ModelPlaceFilterInput | null > | null,
  not?: ModelPlaceFilterInput | null,
};

export type ModelPlaceConnection = {
  __typename: "ModelPlaceConnection",
  items:  Array<Place | null >,
  nextToken?: string | null,
};

export type ModelMenuGroupFilterInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelMenuGroupFilterInput | null > | null,
  or?: Array< ModelMenuGroupFilterInput | null > | null,
  not?: ModelMenuGroupFilterInput | null,
  placeMenuGroupsId?: ModelIDInput | null,
};

export type ModelSubscriptionOrderFilterInput = {
  status?: ModelSubscriptionStringInput | null,
  toGo?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderFilterInput | null > | null,
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

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionPlaceFilterInput = {
  name?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  about?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPlaceFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlaceFilterInput | null > | null,
};

export type ModelSubscriptionMenuGroupFilterInput = {
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMenuGroupFilterInput | null > | null,
  or?: Array< ModelSubscriptionMenuGroupFilterInput | null > | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    items:  Array< {
      __typename: "OrderItem",
      meta:  {
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
      },
      quantity: number,
      notes?: string | null,
    } >,
    status: OrderStatus,
    toGo?: boolean | null,
    meta?:  {
      __typename: "OrderMetadata",
      table?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    items:  Array< {
      __typename: "OrderItem",
      meta:  {
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
      },
      quantity: number,
      notes?: string | null,
    } >,
    status: OrderStatus,
    toGo?: boolean | null,
    meta?:  {
      __typename: "OrderMetadata",
      table?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    items:  Array< {
      __typename: "OrderItem",
      meta:  {
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
      },
      quantity: number,
      notes?: string | null,
    } >,
    status: OrderStatus,
    toGo?: boolean | null,
    meta?:  {
      __typename: "OrderMetadata",
      table?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePlaceMutationVariables = {
  input: CreatePlaceInput,
  condition?: ModelPlaceConditionInput | null,
};

export type CreatePlaceMutation = {
  createPlace?:  {
    __typename: "Place",
    owner?: string | null,
    name: string,
    category?: string | null,
    about?: string | null,
    menuGroups?:  {
      __typename: "ModelMenuGroupConnection",
      items:  Array< {
        __typename: "MenuGroup",
        name: string,
        items:  Array< {
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
        } >,
        id: string,
        createdAt: string,
        updatedAt: string,
        placeMenuGroupsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
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
    owner?: string | null,
    name: string,
    category?: string | null,
    about?: string | null,
    menuGroups?:  {
      __typename: "ModelMenuGroupConnection",
      items:  Array< {
        __typename: "MenuGroup",
        name: string,
        items:  Array< {
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
        } >,
        id: string,
        createdAt: string,
        updatedAt: string,
        placeMenuGroupsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
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
    owner?: string | null,
    name: string,
    category?: string | null,
    about?: string | null,
    menuGroups?:  {
      __typename: "ModelMenuGroupConnection",
      items:  Array< {
        __typename: "MenuGroup",
        name: string,
        items:  Array< {
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
        } >,
        id: string,
        createdAt: string,
        updatedAt: string,
        placeMenuGroupsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMenuGroupMutationVariables = {
  input: CreateMenuGroupInput,
  condition?: ModelMenuGroupConditionInput | null,
};

export type CreateMenuGroupMutation = {
  createMenuGroup?:  {
    __typename: "MenuGroup",
    name: string,
    items:  Array< {
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
    } >,
    id: string,
    createdAt: string,
    updatedAt: string,
    placeMenuGroupsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateMenuGroupMutationVariables = {
  input: UpdateMenuGroupInput,
  condition?: ModelMenuGroupConditionInput | null,
};

export type UpdateMenuGroupMutation = {
  updateMenuGroup?:  {
    __typename: "MenuGroup",
    name: string,
    items:  Array< {
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
    } >,
    id: string,
    createdAt: string,
    updatedAt: string,
    placeMenuGroupsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteMenuGroupMutationVariables = {
  input: DeleteMenuGroupInput,
  condition?: ModelMenuGroupConditionInput | null,
};

export type DeleteMenuGroupMutation = {
  deleteMenuGroup?:  {
    __typename: "MenuGroup",
    name: string,
    items:  Array< {
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
    } >,
    id: string,
    createdAt: string,
    updatedAt: string,
    placeMenuGroupsId?: string | null,
    owner?: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    items:  Array< {
      __typename: "OrderItem",
      meta:  {
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
      },
      quantity: number,
      notes?: string | null,
    } >,
    status: OrderStatus,
    toGo?: boolean | null,
    meta?:  {
      __typename: "OrderMetadata",
      table?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      items:  Array< {
        __typename: "OrderItem",
        meta:  {
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
        },
        quantity: number,
        notes?: string | null,
      } >,
      status: OrderStatus,
      toGo?: boolean | null,
      meta?:  {
        __typename: "OrderMetadata",
        table?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPlaceQueryVariables = {
  id: string,
};

export type GetPlaceQuery = {
  getPlace?:  {
    __typename: "Place",
    owner?: string | null,
    name: string,
    category?: string | null,
    about?: string | null,
    menuGroups?:  {
      __typename: "ModelMenuGroupConnection",
      items:  Array< {
        __typename: "MenuGroup",
        name: string,
        items:  Array< {
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
        } >,
        id: string,
        createdAt: string,
        updatedAt: string,
        placeMenuGroupsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
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
      owner?: string | null,
      name: string,
      category?: string | null,
      about?: string | null,
      menuGroups?:  {
        __typename: "ModelMenuGroupConnection",
        items:  Array< {
          __typename: "MenuGroup",
          name: string,
          items:  Array< {
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
          } >,
          id: string,
          createdAt: string,
          updatedAt: string,
          placeMenuGroupsId?: string | null,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMenuGroupQueryVariables = {
  id: string,
};

export type GetMenuGroupQuery = {
  getMenuGroup?:  {
    __typename: "MenuGroup",
    name: string,
    items:  Array< {
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
    } >,
    id: string,
    createdAt: string,
    updatedAt: string,
    placeMenuGroupsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListMenuGroupsQueryVariables = {
  filter?: ModelMenuGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMenuGroupsQuery = {
  listMenuGroups?:  {
    __typename: "ModelMenuGroupConnection",
    items:  Array< {
      __typename: "MenuGroup",
      name: string,
      items:  Array< {
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
      } >,
      id: string,
      createdAt: string,
      updatedAt: string,
      placeMenuGroupsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    items:  Array< {
      __typename: "OrderItem",
      meta:  {
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
      },
      quantity: number,
      notes?: string | null,
    } >,
    status: OrderStatus,
    toGo?: boolean | null,
    meta?:  {
      __typename: "OrderMetadata",
      table?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    items:  Array< {
      __typename: "OrderItem",
      meta:  {
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
      },
      quantity: number,
      notes?: string | null,
    } >,
    status: OrderStatus,
    toGo?: boolean | null,
    meta?:  {
      __typename: "OrderMetadata",
      table?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    items:  Array< {
      __typename: "OrderItem",
      meta:  {
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
      },
      quantity: number,
      notes?: string | null,
    } >,
    status: OrderStatus,
    toGo?: boolean | null,
    meta?:  {
      __typename: "OrderMetadata",
      table?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePlaceSubscriptionVariables = {
  filter?: ModelSubscriptionPlaceFilterInput | null,
  owner?: string | null,
};

export type OnCreatePlaceSubscription = {
  onCreatePlace?:  {
    __typename: "Place",
    owner?: string | null,
    name: string,
    category?: string | null,
    about?: string | null,
    menuGroups?:  {
      __typename: "ModelMenuGroupConnection",
      items:  Array< {
        __typename: "MenuGroup",
        name: string,
        items:  Array< {
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
        } >,
        id: string,
        createdAt: string,
        updatedAt: string,
        placeMenuGroupsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlaceSubscriptionVariables = {
  filter?: ModelSubscriptionPlaceFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePlaceSubscription = {
  onUpdatePlace?:  {
    __typename: "Place",
    owner?: string | null,
    name: string,
    category?: string | null,
    about?: string | null,
    menuGroups?:  {
      __typename: "ModelMenuGroupConnection",
      items:  Array< {
        __typename: "MenuGroup",
        name: string,
        items:  Array< {
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
        } >,
        id: string,
        createdAt: string,
        updatedAt: string,
        placeMenuGroupsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlaceSubscriptionVariables = {
  filter?: ModelSubscriptionPlaceFilterInput | null,
  owner?: string | null,
};

export type OnDeletePlaceSubscription = {
  onDeletePlace?:  {
    __typename: "Place",
    owner?: string | null,
    name: string,
    category?: string | null,
    about?: string | null,
    menuGroups?:  {
      __typename: "ModelMenuGroupConnection",
      items:  Array< {
        __typename: "MenuGroup",
        name: string,
        items:  Array< {
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
        } >,
        id: string,
        createdAt: string,
        updatedAt: string,
        placeMenuGroupsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMenuGroupSubscriptionVariables = {
  filter?: ModelSubscriptionMenuGroupFilterInput | null,
  owner?: string | null,
};

export type OnCreateMenuGroupSubscription = {
  onCreateMenuGroup?:  {
    __typename: "MenuGroup",
    name: string,
    items:  Array< {
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
    } >,
    id: string,
    createdAt: string,
    updatedAt: string,
    placeMenuGroupsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateMenuGroupSubscriptionVariables = {
  filter?: ModelSubscriptionMenuGroupFilterInput | null,
  owner?: string | null,
};

export type OnUpdateMenuGroupSubscription = {
  onUpdateMenuGroup?:  {
    __typename: "MenuGroup",
    name: string,
    items:  Array< {
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
    } >,
    id: string,
    createdAt: string,
    updatedAt: string,
    placeMenuGroupsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteMenuGroupSubscriptionVariables = {
  filter?: ModelSubscriptionMenuGroupFilterInput | null,
  owner?: string | null,
};

export type OnDeleteMenuGroupSubscription = {
  onDeleteMenuGroup?:  {
    __typename: "MenuGroup",
    name: string,
    items:  Array< {
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
    } >,
    id: string,
    createdAt: string,
    updatedAt: string,
    placeMenuGroupsId?: string | null,
    owner?: string | null,
  } | null,
};
