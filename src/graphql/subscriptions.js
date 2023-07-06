/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateVendor = /* GraphQL */ `
  subscription OnCreateVendor($filter: ModelSubscriptionVendorFilterInput) {
    onCreateVendor(filter: $filter) {
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
export const onUpdateVendor = /* GraphQL */ `
  subscription OnUpdateVendor($filter: ModelSubscriptionVendorFilterInput) {
    onUpdateVendor(filter: $filter) {
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
export const onDeleteVendor = /* GraphQL */ `
  subscription OnDeleteVendor($filter: ModelSubscriptionVendorFilterInput) {
    onDeleteVendor(filter: $filter) {
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
export const onCreateVoucher = /* GraphQL */ `
  subscription OnCreateVoucher($filter: ModelSubscriptionVoucherFilterInput) {
    onCreateVoucher(filter: $filter) {
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
export const onUpdateVoucher = /* GraphQL */ `
  subscription OnUpdateVoucher($filter: ModelSubscriptionVoucherFilterInput) {
    onUpdateVoucher(filter: $filter) {
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
export const onDeleteVoucher = /* GraphQL */ `
  subscription OnDeleteVoucher($filter: ModelSubscriptionVoucherFilterInput) {
    onDeleteVoucher(filter: $filter) {
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
export const onCreateMatch = /* GraphQL */ `
  subscription OnCreateMatch($filter: ModelSubscriptionMatchFilterInput) {
    onCreateMatch(filter: $filter) {
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
export const onUpdateMatch = /* GraphQL */ `
  subscription OnUpdateMatch($filter: ModelSubscriptionMatchFilterInput) {
    onUpdateMatch(filter: $filter) {
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
export const onDeleteMatch = /* GraphQL */ `
  subscription OnDeleteMatch($filter: ModelSubscriptionMatchFilterInput) {
    onDeleteMatch(filter: $filter) {
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
