/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
      id
      Messages {
        items {
          id
          Text
          chatroomID
          userID
          createdAt
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
        Text
        chatroomID
        userID
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
      __typename
    }
  }
`;
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
      id
      Messages {
        items {
          id
          Text
          chatroomID
          userID
          createdAt
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
        Text
        chatroomID
        userID
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
      __typename
    }
  }
`;
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
      id
      Messages {
        items {
          id
          Text
          chatroomID
          userID
          createdAt
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
        Text
        chatroomID
        userID
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
      __typename
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      Text
      chatroomID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      Text
      chatroomID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      Text
      chatroomID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
          Text
          chatroomID
          userID
          createdAt
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
          Text
          chatroomID
          userID
          createdAt
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
          Text
          chatroomID
          userID
          createdAt
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
export const createVendor = /* GraphQL */ `
  mutation CreateVendor(
    $input: CreateVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    createVendor(input: $input, condition: $condition) {
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
export const updateVendor = /* GraphQL */ `
  mutation UpdateVendor(
    $input: UpdateVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    updateVendor(input: $input, condition: $condition) {
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
export const deleteVendor = /* GraphQL */ `
  mutation DeleteVendor(
    $input: DeleteVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    deleteVendor(input: $input, condition: $condition) {
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
export const createVoucher = /* GraphQL */ `
  mutation CreateVoucher(
    $input: CreateVoucherInput!
    $condition: ModelVoucherConditionInput
  ) {
    createVoucher(input: $input, condition: $condition) {
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
export const updateVoucher = /* GraphQL */ `
  mutation UpdateVoucher(
    $input: UpdateVoucherInput!
    $condition: ModelVoucherConditionInput
  ) {
    updateVoucher(input: $input, condition: $condition) {
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
export const deleteVoucher = /* GraphQL */ `
  mutation DeleteVoucher(
    $input: DeleteVoucherInput!
    $condition: ModelVoucherConditionInput
  ) {
    deleteVoucher(input: $input, condition: $condition) {
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
export const createMatch = /* GraphQL */ `
  mutation CreateMatch(
    $input: CreateMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    createMatch(input: $input, condition: $condition) {
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
export const updateMatch = /* GraphQL */ `
  mutation UpdateMatch(
    $input: UpdateMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    updateMatch(input: $input, condition: $condition) {
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
export const deleteMatch = /* GraphQL */ `
  mutation DeleteMatch(
    $input: DeleteMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    deleteMatch(input: $input, condition: $condition) {
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
export const createUserChatRoom = /* GraphQL */ `
  mutation CreateUserChatRoom(
    $input: CreateUserChatRoomInput!
    $condition: ModelUserChatRoomConditionInput
  ) {
    createUserChatRoom(input: $input, condition: $condition) {
      id
      chatRoomId
      userId
      chatRoom {
        id
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
          Text
          chatroomID
          userID
          createdAt
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
export const updateUserChatRoom = /* GraphQL */ `
  mutation UpdateUserChatRoom(
    $input: UpdateUserChatRoomInput!
    $condition: ModelUserChatRoomConditionInput
  ) {
    updateUserChatRoom(input: $input, condition: $condition) {
      id
      chatRoomId
      userId
      chatRoom {
        id
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
          Text
          chatroomID
          userID
          createdAt
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
export const deleteUserChatRoom = /* GraphQL */ `
  mutation DeleteUserChatRoom(
    $input: DeleteUserChatRoomInput!
    $condition: ModelUserChatRoomConditionInput
  ) {
    deleteUserChatRoom(input: $input, condition: $condition) {
      id
      chatRoomId
      userId
      chatRoom {
        id
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
          Text
          chatroomID
          userID
          createdAt
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
