/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      id
      name
      imageURL
      Messages {
        items {
          id
          createdAt
          text
          chatroomID
          userID
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      users {
        items {
          id
          chatRoomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      LastMessage {
        id
        createdAt
        text
        chatroomID
        userID
        updatedAt
        __typename
      }
      _version
      createdAt
      updatedAt
      chatRoomLastMessageId
      __typename
    }
  }
`;
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        imageURL
        Messages {
          nextToken
          __typename
        }
        users {
          nextToken
          __typename
        }
        LastMessage {
          id
          createdAt
          text
          chatroomID
          userID
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      createdAt
      text
      chatroomID
      userID
      updatedAt
      __typename
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        text
        chatroomID
        userID
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      phoneNum
      age
      gender
      pronounce
      location
      bio
      imageURL
      purpose
      interest
      foodPref
      preferredMinAge
      preferredMaxAge
      preferredGender
      preferredDistanceAway
      swipedVouchers {
        id
        title
        priceBefore
        priceAfter
        description
        avgRating
        numRedeemed
        maxRedeemed
        forQuantity
        imageURL
        location
        vendor {
          id
          name
          phoneNum
          email
          address
          link
          verified
          type
          imageURL
          location
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        vendorVouchersId
        __typename
      }
      matches {
        items {
          id
          user1ID
          user2ID
          isMatch
          createdAt
          updatedAt
          userMatchesId
          __typename
        }
        nextToken
        __typename
      }
      Messages {
        items {
          id
          createdAt
          text
          chatroomID
          userID
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ChatRooms {
        items {
          id
          chatRoomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        phoneNum
        age
        gender
        pronounce
        location
        bio
        imageURL
        purpose
        interest
        foodPref
        preferredMinAge
        preferredMaxAge
        preferredGender
        preferredDistanceAway
        swipedVouchers {
          id
          title
          priceBefore
          priceAfter
          description
          avgRating
          numRedeemed
          maxRedeemed
          forQuantity
          imageURL
          location
          createdAt
          updatedAt
          vendorVouchersId
          __typename
        }
        matches {
          nextToken
          __typename
        }
        Messages {
          nextToken
          __typename
        }
        ChatRooms {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getVendor = /* GraphQL */ `
  query GetVendor($id: ID!) {
    getVendor(id: $id) {
      id
      name
      phoneNum
      email
      address
      link
      verified
      type
      imageURL
      location
      vouchers {
        items {
          id
          title
          priceBefore
          priceAfter
          description
          avgRating
          numRedeemed
          maxRedeemed
          forQuantity
          imageURL
          location
          createdAt
          updatedAt
          vendorVouchersId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listVendors = /* GraphQL */ `
  query ListVendors(
    $filter: ModelVendorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVendors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phoneNum
        email
        address
        link
        verified
        type
        imageURL
        location
        vouchers {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getVoucher = /* GraphQL */ `
  query GetVoucher($id: ID!) {
    getVoucher(id: $id) {
      id
      title
      priceBefore
      priceAfter
      description
      avgRating
      numRedeemed
      maxRedeemed
      forQuantity
      imageURL
      location
      vendor {
        id
        name
        phoneNum
        email
        address
        link
        verified
        type
        imageURL
        location
        vouchers {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      vendorVouchersId
      __typename
    }
  }
`;
export const listVouchers = /* GraphQL */ `
  query ListVouchers(
    $filter: ModelVoucherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVouchers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        priceBefore
        priceAfter
        description
        avgRating
        numRedeemed
        maxRedeemed
        forQuantity
        imageURL
        location
        vendor {
          id
          name
          phoneNum
          email
          address
          link
          verified
          type
          imageURL
          location
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        vendorVouchersId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMatch = /* GraphQL */ `
  query GetMatch($id: ID!) {
    getMatch(id: $id) {
      id
      user1ID
      user2ID
      isMatch
      user1 {
        id
        username
        email
        phoneNum
        age
        gender
        pronounce
        location
        bio
        imageURL
        purpose
        interest
        foodPref
        preferredMinAge
        preferredMaxAge
        preferredGender
        preferredDistanceAway
        swipedVouchers {
          id
          title
          priceBefore
          priceAfter
          description
          avgRating
          numRedeemed
          maxRedeemed
          forQuantity
          imageURL
          location
          createdAt
          updatedAt
          vendorVouchersId
          __typename
        }
        matches {
          nextToken
          __typename
        }
        Messages {
          nextToken
          __typename
        }
        ChatRooms {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      user2 {
        id
        username
        email
        phoneNum
        age
        gender
        pronounce
        location
        bio
        imageURL
        purpose
        interest
        foodPref
        preferredMinAge
        preferredMaxAge
        preferredGender
        preferredDistanceAway
        swipedVouchers {
          id
          title
          priceBefore
          priceAfter
          description
          avgRating
          numRedeemed
          maxRedeemed
          forQuantity
          imageURL
          location
          createdAt
          updatedAt
          vendorVouchersId
          __typename
        }
        matches {
          nextToken
          __typename
        }
        Messages {
          nextToken
          __typename
        }
        ChatRooms {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userMatchesId
      __typename
    }
  }
`;
export const listMatches = /* GraphQL */ `
  query ListMatches(
    $filter: ModelMatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMatches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user1ID
        user2ID
        isMatch
        user1 {
          id
          username
          email
          phoneNum
          age
          gender
          pronounce
          location
          bio
          imageURL
          purpose
          interest
          foodPref
          preferredMinAge
          preferredMaxAge
          preferredGender
          preferredDistanceAway
          createdAt
          updatedAt
          __typename
        }
        user2 {
          id
          username
          email
          phoneNum
          age
          gender
          pronounce
          location
          bio
          imageURL
          purpose
          interest
          foodPref
          preferredMinAge
          preferredMaxAge
          preferredGender
          preferredDistanceAway
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        userMatchesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserChatRoom = /* GraphQL */ `
  query GetUserChatRoom($id: ID!) {
    getUserChatRoom(id: $id) {
      id
      chatRoomId
      userId
      chatRoom {
        id
        name
        imageURL
        Messages {
          nextToken
          __typename
        }
        users {
          nextToken
          __typename
        }
        LastMessage {
          id
          createdAt
          text
          chatroomID
          userID
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
        __typename
      }
      user {
        id
        username
        email
        phoneNum
        age
        gender
        pronounce
        location
        bio
        imageURL
        purpose
        interest
        foodPref
        preferredMinAge
        preferredMaxAge
        preferredGender
        preferredDistanceAway
        swipedVouchers {
          id
          title
          priceBefore
          priceAfter
          description
          avgRating
          numRedeemed
          maxRedeemed
          forQuantity
          imageURL
          location
          createdAt
          updatedAt
          vendorVouchersId
          __typename
        }
        matches {
          nextToken
          __typename
        }
        Messages {
          nextToken
          __typename
        }
        ChatRooms {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserChatRooms = /* GraphQL */ `
  query ListUserChatRooms(
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        chatRoomId
        userId
        chatRoom {
          id
          name
          imageURL
          createdAt
          updatedAt
          chatRoomLastMessageId
          __typename
        }
        user {
          id
          username
          email
          phoneNum
          age
          gender
          pronounce
          location
          bio
          imageURL
          purpose
          interest
          foodPref
          preferredMinAge
          preferredMaxAge
          preferredGender
          preferredDistanceAway
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listMessagesByChatRoom = /* GraphQL */ `
  query ListMessagesByChatRoom(
    $chatroomID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessagesByChatRoom(
      chatroomID: $chatroomID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        text
        chatroomID
        userID
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const messagesByUserID = /* GraphQL */ `
  query MessagesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        text
        chatroomID
        userID
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userChatRoomsByChatRoomId = /* GraphQL */ `
  query UserChatRoomsByChatRoomId(
    $chatRoomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userChatRoomsByChatRoomId(
      chatRoomId: $chatRoomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatRoomId
        userId
        chatRoom {
          id
          name
          imageURL
          createdAt
          updatedAt
          chatRoomLastMessageId
          __typename
        }
        user {
          id
          username
          email
          phoneNum
          age
          gender
          pronounce
          location
          bio
          imageURL
          purpose
          interest
          foodPref
          preferredMinAge
          preferredMaxAge
          preferredGender
          preferredDistanceAway
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userChatRoomsByUserId = /* GraphQL */ `
  query UserChatRoomsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userChatRoomsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatRoomId
        userId
        chatRoom {
          id
          name
          imageURL
          createdAt
          updatedAt
          chatRoomLastMessageId
          __typename
        }
        user {
          id
          username
          email
          phoneNum
          age
          gender
          pronounce
          location
          bio
          imageURL
          purpose
          interest
          foodPref
          preferredMinAge
          preferredMaxAge
          preferredGender
          preferredDistanceAway
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
