/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        forQuantity
        imageURL
        location
        vendor {
          id
          name
          phone
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
        forQuantity
        imageURL
        location
        vendor {
          id
          name
          phone
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
        forQuantity
        imageURL
        location
        vendor {
          id
          name
          phone
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
      phone
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
      phone
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
      phone
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
      forQuantity
      imageURL
      location
      vendor {
        id
        name
        phone
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
      forQuantity
      imageURL
      location
      vendor {
        id
        name
        phone
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
      forQuantity
      imageURL
      location
      vendor {
        id
        name
        phone
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
