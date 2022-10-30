import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type EagerMenuGroup = {
  readonly name: string;
  readonly items?: (MenuItem | null)[] | null;
}

type LazyMenuGroup = {
  readonly name: string;
  readonly items?: (MenuItem | null)[] | null;
}

export declare type MenuGroup = LazyLoading extends LazyLoadingDisabled ? EagerMenuGroup : LazyMenuGroup

export declare const MenuGroup: (new (init: ModelInit<MenuGroup>) => MenuGroup)

type EagerMenuItem = {
  readonly name: string;
  readonly price: number;
  readonly discountPrice?: number | null;
  readonly description?: string | null;
  readonly images?: ItemImages | null;
  readonly hide?: boolean | null;
  readonly hideFromDelivery?: boolean | null;
  readonly minimumAge?: number | null;
}

type LazyMenuItem = {
  readonly name: string;
  readonly price: number;
  readonly discountPrice?: number | null;
  readonly description?: string | null;
  readonly images?: ItemImages | null;
  readonly hide?: boolean | null;
  readonly hideFromDelivery?: boolean | null;
  readonly minimumAge?: number | null;
}

export declare type MenuItem = LazyLoading extends LazyLoadingDisabled ? EagerMenuItem : LazyMenuItem

export declare const MenuItem: (new (init: ModelInit<MenuItem>) => MenuItem)

type EagerItemImages = {
  readonly small?: string | null;
  readonly medium?: string | null;
  readonly large?: string | null;
}

type LazyItemImages = {
  readonly small?: string | null;
  readonly medium?: string | null;
  readonly large?: string | null;
}

export declare type ItemImages = LazyLoading extends LazyLoadingDisabled ? EagerItemImages : LazyItemImages

export declare const ItemImages: (new (init: ModelInit<ItemImages>) => ItemImages)

type PlaceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerPlace = {
  readonly id: string;
  readonly name: string;
  readonly category?: string | null;
  readonly about?: string | null;
  readonly menu?: (MenuGroup | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlace = {
  readonly id: string;
  readonly name: string;
  readonly category?: string | null;
  readonly about?: string | null;
  readonly menu?: (MenuGroup | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Place = LazyLoading extends LazyLoadingDisabled ? EagerPlace : LazyPlace

export declare const Place: (new (init: ModelInit<Place, PlaceMetaData>) => Place) & {
  copyOf(source: Place, mutator: (draft: MutableModel<Place, PlaceMetaData>) => MutableModel<Place, PlaceMetaData> | void): Place;
}