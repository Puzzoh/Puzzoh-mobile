/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      phoneNum
      gender
      pronounce
      location
      bio
      imageURL
      purpose
      interest
      foodPref
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
        gender
        pronounce
        location
        bio
        imageURL
        purpose
        interest
        foodPref
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
      nextToken
      __typename
    }
  }
`;
