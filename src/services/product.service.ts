import gql from "graphql-tag";

export const PRODUCTS = gql`
  query Products($query: ProductsFetchQueries) {
    products(query: $query) {
      data {
        _id
        uid
        name
        image
        price
        currency
        isDeleted
      }
      totalPages
      countTotal
      currentPage
    }
  }
`;

export const PRODUCT_BY_ID = gql`
  query Product($productId: ID!) {
    product(id: $productId) {
      _id
      uid
      name
      price
      image
      currency
    }
  }
`;

export const CREATE_PRODUCT = gql`
  mutation CreateProduct($input: CreateProductInput!) {
    createProduct(input: $input) {
      _id
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($updateProductId: ID!, $input: UpdateProductInput!) {
    updateProduct(id: $updateProductId, input: $input) {
      _id
      name
      uid
      currency
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($deleteProductId: ID!) {
    deleteProduct(id: $deleteProductId) {
      _id
    }
  }
`;
