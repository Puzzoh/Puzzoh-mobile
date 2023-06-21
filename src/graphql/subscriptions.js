/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const onCreateVoucher = /* GraphQL */ `
  subscription OnCreateVoucher($filter: ModelSubscriptionVoucherFilterInput) {
    onCreateVoucher(filter: $filter) {
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
export const onUpdateVoucher = /* GraphQL */ `
  subscription OnUpdateVoucher($filter: ModelSubscriptionVoucherFilterInput) {
    onUpdateVoucher(filter: $filter) {
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
export const onDeleteVoucher = /* GraphQL */ `
  subscription OnDeleteVoucher($filter: ModelSubscriptionVoucherFilterInput) {
    onDeleteVoucher(filter: $filter) {
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
