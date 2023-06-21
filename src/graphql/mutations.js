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
