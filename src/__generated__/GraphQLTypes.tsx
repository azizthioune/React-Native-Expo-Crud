import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateProductInput = {
  /** Currency of the product */
  currency?: InputMaybe<Scalars['String']['input']>;
  /** Image of the product */
  image?: InputMaybe<Scalars['String']['input']>;
  /** Description of the product */
  name: Scalars['String']['input'];
  /** Price of the product */
  price?: InputMaybe<Scalars['Float']['input']>;
  /** Unique ID for the product */
  uid: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createProduct: Product;
  deleteProduct: Product;
  updateProduct: Product;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID']['input'];
  input: UpdateProductInput;
};

export type Product = {
  __typename?: 'Product';
  /** Identify element  */
  _id?: Maybe<Scalars['ID']['output']>;
  /** Created at */
  createdAt: Scalars['String']['output'];
  /** Currency of the product */
  currency?: Maybe<Scalars['String']['output']>;
  /** Image of the product */
  image?: Maybe<Scalars['String']['output']>;
  /** Is deleted */
  isDeleted: Scalars['Boolean']['output'];
  /** Name of the product */
  name?: Maybe<Scalars['String']['output']>;
  /** Price of the product */
  price?: Maybe<Scalars['Float']['output']>;
  /** Product uid! */
  uid?: Maybe<Scalars['String']['output']>;
  /** Updated at */
  updatedAt: Scalars['String']['output'];
};

export type ProductCreationResponse = {
  __typename?: 'ProductCreationResponse';
  countTotal?: Maybe<Scalars['Int']['output']>;
  currentPage?: Maybe<Scalars['Int']['output']>;
  data?: Maybe<Array<Maybe<Product>>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ProductsFetchQueries = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  product: Product;
  products: ProductCreationResponse;
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductsArgs = {
  query?: InputMaybe<ProductsFetchQueries>;
};

export type UpdateProductInput = {
  /** Currency of the product */
  currency?: InputMaybe<Scalars['String']['input']>;
  /** Image of the product */
  image?: InputMaybe<Scalars['String']['input']>;
  /** Description of the product */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Price of the product */
  price?: InputMaybe<Scalars['Float']['input']>;
  /** Unique ID for the product */
  uid?: InputMaybe<Scalars['String']['input']>;
};
