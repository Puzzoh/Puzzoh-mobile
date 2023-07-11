// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const VendorType = {
  "RESTAURANT": "Restaurant",
  "NON_RESTAURANT": "NonRestaurant"
};

const GenderType = {
  "MEN": "Men",
  "WOMEN": "Women",
  "NONBINARY": "Nonbinary",
  "ALL": "All"
};

const PurposeType = {
  "FRIEND": "Friend",
  "DATE": "Date",
  "EXPLORE": "Explore"
};

const InterestType = {
  "TRAVELING": "Traveling",
  "PHOTO": "Photo",
  "READING": "Reading",
  "COOKING": "Cooking",
  "SPORTS": "Sports",
  "GAMING": "Gaming",
  "MUSIC": "Music",
  "GARDENING": "Gardening",
  "YOGA": "Yoga",
  "PAINTING": "Painting",
  "WRITING": "Writing"
};

const FoodPrefType = {
  "VEGAN": "Vegan",
  "MEDITERRANEAN": "Mediterranean",
  "ITALIAN": "Italian",
  "CHINESE": "Chinese",
  "JAPANESE": "Japanese",
  "MEXICAN": "Mexican",
  "AMERICAN": "American",
  "GREEK": "Greek",
  "SPANISH": "Spanish",
  "KOREAN": "Korean",
  "VIETNAMESE": "Vietnamese",
  "DESSERT": "Dessert"
};

const { ChatRoom, Message, User, Vendor, Voucher, Match, UserChatRoom } = initSchema(schema);

export {
  ChatRoom,
  Message,
  User,
  Vendor,
  Voucher,
  Match,
  UserChatRoom,
  VendorType,
  GenderType,
  PurposeType,
  InterestType,
  FoodPrefType
};