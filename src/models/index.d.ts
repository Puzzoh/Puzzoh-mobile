import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum VendorType {
  RESTAURANT = "Restaurant",
  NON_RESTAURANT = "NonRestaurant"
}

export enum GenderType {
  MEN = "Men",
  WOMEN = "Women",
  NONBINARY = "Nonbinary",
  ALL = "All"
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



type EagerChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Messages?: (Message | null)[] | null;
  readonly users?: (UserChatRoom | null)[] | null;
  readonly LastMessage?: Message | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatRoomLastMessageId?: string | null;
}

type LazyChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Messages: AsyncCollection<Message>;
  readonly users: AsyncCollection<UserChatRoom>;
  readonly LastMessage: AsyncItem<Message | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatRoomLastMessageId?: string | null;
}

export declare type ChatRoom = LazyLoading extends LazyLoadingDisabled ? EagerChatRoom : LazyChatRoom

export declare const ChatRoom: (new (init: ModelInit<ChatRoom>) => ChatRoom) & {
  copyOf(source: ChatRoom, mutator: (draft: MutableModel<ChatRoom>) => MutableModel<ChatRoom> | void): ChatRoom;
}

type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Text: string;
  readonly chatroomID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Text: string;
  readonly chatroomID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly phoneNum?: string | null;
  readonly age?: number | null;
  readonly gender?: string | null;
  readonly pronounce?: string | null;
  readonly location?: string | null;
  readonly bio?: string | null;
  readonly imageURL?: string | null;
  readonly purpose?: string | null;
  readonly interest?: (InterestType | null)[] | keyof typeof InterestType | null;
  readonly foodPref?: (FoodPrefType | null)[] | keyof typeof FoodPrefType | null;
  readonly preferredMinAge?: number | null;
  readonly preferredMaxAge?: number | null;
  readonly preferredGender?: string | null;
  readonly preferredDistanceAway?: number | null;
  readonly matches?: Match[] | null;
  readonly Messages?: (Message | null)[] | null;
  readonly ChatRooms?: (UserChatRoom | null)[] | null;
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
  readonly phoneNum?: string | null;
  readonly age?: number | null;
  readonly gender?: string | null;
  readonly pronounce?: string | null;
  readonly location?: string | null;
  readonly bio?: string | null;
  readonly imageURL?: string | null;
  readonly purpose?: string | null;
  readonly interest?: (InterestType | null)[] | keyof typeof InterestType | null;
  readonly foodPref?: (FoodPrefType | null)[] | keyof typeof FoodPrefType | null;
  readonly preferredMinAge?: number | null;
  readonly preferredMaxAge?: number | null;
  readonly preferredGender?: string | null;
  readonly preferredDistanceAway?: number | null;
  readonly matches: AsyncCollection<Match>;
  readonly Messages: AsyncCollection<Message>;
  readonly ChatRooms: AsyncCollection<UserChatRoom>;
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
  readonly phoneNum: string;
  readonly email: string;
  readonly address: string;
  readonly link?: string | null;
  readonly verified?: boolean | null;
  readonly type?: VendorType | keyof typeof VendorType | null;
  readonly imageURL?: string | null;
  readonly location?: string | null;
  readonly vouchers?: Voucher[] | null;
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
  readonly phoneNum: string;
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
  readonly maxRedeemed?: number | null;
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
  readonly maxRedeemed?: number | null;
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

type EagerMatch = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Match, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user1ID: string;
  readonly user2ID: string;
  readonly isMatch: boolean;
  readonly user1: User;
  readonly user2: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userMatchesId?: string | null;
}

type LazyMatch = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Match, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user1ID: string;
  readonly user2ID: string;
  readonly isMatch: boolean;
  readonly user1: AsyncItem<User>;
  readonly user2: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userMatchesId?: string | null;
}

export declare type Match = LazyLoading extends LazyLoadingDisabled ? EagerMatch : LazyMatch

export declare const Match: (new (init: ModelInit<Match>) => Match) & {
  copyOf(source: Match, mutator: (draft: MutableModel<Match>) => MutableModel<Match> | void): Match;
}

type EagerUserChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly chatRoomId?: string | null;
  readonly userId?: string | null;
  readonly chatRoom: ChatRoom;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly chatRoomId?: string | null;
  readonly userId?: string | null;
  readonly chatRoom: AsyncItem<ChatRoom>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserChatRoom = LazyLoading extends LazyLoadingDisabled ? EagerUserChatRoom : LazyUserChatRoom

export declare const UserChatRoom: (new (init: ModelInit<UserChatRoom>) => UserChatRoom) & {
  copyOf(source: UserChatRoom, mutator: (draft: MutableModel<UserChatRoom>) => MutableModel<UserChatRoom> | void): UserChatRoom;
}