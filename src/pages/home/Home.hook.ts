import { useMutation, useQuery } from "@apollo/client";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import SceneKeys from "@src/Constants/sceneKeys";
import { Product } from "@src/__generated__/GraphQLTypes";
import { CREATE_PRODUCT, PRODUCTS } from "@src/services/product.service";
import { useEffect, useState } from "react";

export const LIMIT = 10;
export const PAGE = 1;

const useHome = () => {
  const defaultValues = {
    code: "",
    name: "",
    price: 0,
  };

  const navigation = useNavigation<any>();
  const isFocused = useIsFocused();

  const [products, setProducts] = useState<Product[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [formValues, setFormValues] = useState(defaultValues);

  const { data, loading, refetch, fetchMore } = useQuery(PRODUCTS, {
    fetchPolicy: "network-only",
    notifyOnNetworkStatusChange: true,
    variables: {
      query: {
        limit: LIMIT,
        offset: 0,
      },
    },
  });

  const [addProduct, { loading: addProductLoading }] =
    useMutation(CREATE_PRODUCT);

  useEffect(() => {
    refetch();
  }, [isFocused]);

  useEffect(() => {
    setProducts(data?.products?.data);
  }, [data]);

  const onPress = (item: Product) => {
    navigation.navigate(SceneKeys.Details, {
      productId: item._id,
      name: item.name,
      code: item.uid,
      price: item.price,
      currency: item.currency,
    });
  };

  const onEndReached = () => {
    if (products?.length !== data?.products?.countTotal) {
      fetchMore({
        variables: {
          query: {
            offset: products?.length,
          },
        },
        updateQuery: handleUpdateQuery,
      });
    }
  };

  const handleUpdateQuery = (prev, { fetchMoreResult }) => {
    if (!fetchMoreResult) {
      return prev;
    }

    const countTotal = fetchMoreResult.products.countTotal;
    const currentPage = fetchMoreResult.products.currentPage;
    const totalPages = fetchMoreResult.products.totalPages;
    const data = [...prev?.products?.data, ...fetchMoreResult?.products?.data];

    setProducts(data);
    return Object.assign({}, prev, {
      data: {
        products: {
          __typename: "ProductCreationResponse",
          countTotal,
          currentPage,
          data,
          totalPages,
        },
      },
    });
  };

  const handleAddProduct = () => {
    const { code, name, price } = formValues;
    if (!code.length || !name.length || price === 0) {
      alert("OOps all fields are mandatory!");
    } else {
      addProduct({
        variables: {
          input: {
            image: "https://picsum.photos/200/300",
            currency: "EUR",
            uid: code,
            price: +price,
            name,
          },
        },
      })
        .then(() => {
          refetch();
          closeOrOpenModal();
        })
        .catch((err) => {
          alert("OOps an error has occured!");
        });
    }
  };

  const closeOrOpenModal = () => {
    setModalVisible(!modalVisible);
  };

  return {
    onPress,
    refetch,
    onEndReached,
    closeOrOpenModal,
    setFormValues,
    handleAddProduct,
    formValues,
    loading,
    products,
    modalVisible,
    addProductLoading,
  };
};

export default useHome;
