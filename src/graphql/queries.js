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
      purpose
      interest
      foodPref
      createdAt
      updatedAt
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
        purpose
        interest
        foodPref
        createdAt
        updatedAt
      }
      nextToken
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
      vouchers {
        items {
          id
          title
          priceBefore
          priceAfter
          description
          rating
          numRedeemed
          forQuantity
          createdAt
          updatedAt
          vendorVouchersId
        }
        nextToken
      }
      createdAt
      updatedAt
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
        vouchers {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
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
      rating
      numRedeemed
      forQuantity
      vendor {
        id
        name
        phone
        email
        address
        link
        verified
        type
        vouchers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      vendorVouchersId
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
        rating
        numRedeemed
        forQuantity
        vendor {
          id
          name
          phone
          email
          address
          link
          verified
          type
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        vendorVouchersId
      }
      nextToken
    }
  }
`;
