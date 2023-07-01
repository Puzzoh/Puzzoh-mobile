import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum VendorType {
  RESTAURANT = "Restaurant",
  NON_RESTAURANT = "NonRestaurant"
}

export enum PurposeType {
  FRIEND = "Friend",
  DATE = "Date",
  EXPLORE = "Explore"
}

export enum InterestType {
  TRAVELING = "Traveling",
  PHOTO = "Photo",
  READING = "Reading",
  COOKING = "Cooking",
  SPORTS = "Sports",
  GAMING = "Gaming",
  MUSIC = "Music",
  GARDENING = "Gardening",
  YOGA = "Yoga",
  PAINTING = "Painting",
  WRITING = "Writing"
}

export enum FoodPrefType {
  VEGAN = "Vegan",
  MEDITERRANEAN = "Mediterranean",
  ITALIAN = "Italian",
  CHINESE = "Chinese",
  JAPANESE = "Japanese",
  MEXICAN = "Mexican",
  AMERICAN = "American",
  GREEK = "Greek",
  SPANISH = "Spanish",
  KOREAN = "Korean",
  VIETNAMESE = "Vietnamese",
  DESSERT = "Dessert"
}



type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly phoneNum: string;
  readonly gender?: string | null;
  readonly pronounce?: string | null;
  readonly location?: string | null;
  readonly bio?: string | null;
  readonly imageURL?: string | null;
  readonly purpose?: (PurposeType | null)[] | keyof typeof PurposeType | null;
  readonly interest?: (InterestType | null)[] | keyof typeof InterestType | null;
  readonly foodPref?: (FoodPrefType | null)[] | keyof typeof FoodPrefType | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly phoneNum: string;
  readonly gender?: string | null;
  readonly pronounce?: string | null;
  readonly location?: string | null;
  readonly bio?: string | null;
  readonly imageURL?: string | null;
  readonly purpose?: (PurposeType | null)[] | keyof typeof PurposeType | null;
  readonly interest?: (InterestType | null)[] | keyof typeof InterestType | null;
  readonly foodPref?: (FoodPrefType | null)[] | keyof typeof FoodPrefType | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerVendor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Vendor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly phone: string;
  readonly email: string;
  readonly address: string;
  readonly link?: string | null;
  readonly verified?: boolean | null;
  readonly type?: VendorType | keyof typeof VendorType | null;
  readonly imageURL?: string | null;
  readonly location?: string | null;
  readonly vouchers?: (Voucher | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVendor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Vendor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly phone: string;
  readonly email: string;
  readonly address: string;
  readonly link?: string | null;
  readonly verified?: boolean | null;
  readonly type?: VendorType | keyof typeof VendorType | null;
  readonly imageURL?: string | null;
  readonly location?: string | null;
  readonly vouchers: AsyncCollection<Voucher>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Vendor = LazyLoading extends LazyLoadingDisabled ? EagerVendor : LazyVendor

export declare const Vendor: (new (init: ModelInit<Vendor>) => Vendor) & {
  copyOf(source: Vendor, mutator: (draft: MutableModel<Vendor>) => MutableModel<Vendor> | void): Vendor;
}

type EagerVoucher = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Voucher, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly priceBefore: number;
  readonly priceAfter: number;
  readonly description?: string | null;
  readonly avgRating?: number | null;
  readonly numRedeemed?: number | null;
  readonly forQuantity?: number | null;
  readonly imageURL?: string | null;
  readonly location?: string | null;
  readonly vendor?: Vendor | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly vendorVouchersId?: string | null;
}

type LazyVoucher = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Voucher, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly priceBefore: number;
  readonly priceAfter: number;
  readonly description?: string | null;
  readonly avgRating?: number | null;
  readonly numRedeemed?: number | null;
  readonly forQuantity?: number | null;
  readonly imageURL?: string | null;
  readonly location?: string | null;
  readonly vendor: AsyncItem<Vendor | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly vendorVouchersId?: string | null;
}

export declare type Voucher = LazyLoading extends LazyLoadingDisabled ? EagerVoucher : LazyVoucher

export declare const Voucher: (new (init: ModelInit<Voucher>) => Voucher) & {
  copyOf(source: Voucher, mutator: (draft: MutableModel<Voucher>) => MutableModel<Voucher> | void): Voucher;
}