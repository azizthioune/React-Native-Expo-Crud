import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import { DetailsProps } from "./Details";
import { useMutation, useQuery } from "@apollo/client";
import {
  DELETE_PRODUCT,
  PRODUCTS,
  PRODUCT_BY_ID,
  UPDATE_PRODUCT,
} from "@src/services/product.service";
import SceneKeys from "@src/Constants/sceneKeys";
import { useNavigation } from "@react-navigation/native";

const useDetails = (props: DetailsProps) => {
  const navigation = useNavigation<any>();
  const { productId, price, name, code, currency } = props.route.params;

  const { data, loading, refetch } = useQuery(PRODUCT_BY_ID, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
    variables: {
      productId,
    },
  });

  const [updateProduct, { loading: updateProductLoading }] =
    useMutation(UPDATE_PRODUCT);

  const product = data?.product;

  const defaultValues = {
    name,
    price,
    code,
  };

  const [deleteProduct, { loading: deleteLoading }] = useMutation(
    DELETE_PRODUCT,
    { refetchQueries: [{ query: PRODUCTS }] },
  );

  const [modalVisible, setModalVisible] = useState(false);
  const [formValues, setFormValues] = useState(defaultValues);

  const handleDelete = () => {
    Alert.alert("Delete Product", "Do you really want to delete this product", [
      {
        text: "No",
        onPress: () => null,
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () =>
          deleteProduct({
            variables: {
              deleteProductId: productId,
            },
          }).then(() => navigation.navigate(SceneKeys.Home)),
      },
    ]);
  };

  const closeOrOpenModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleUpdate = () => {
    const { code, name, price } = formValues;
    updateProduct({
      variables: {
        updateProductId: productId,
        input: {
          image: "https://picsum.photos/200/300",
          currency,
          uid: code,
          price: +price,
          name,
        },
      },
    })
      .then(() => {
        closeOrOpenModal();
        setTimeout(() => {
          navigation.navigate(SceneKeys.Home);
        }, 500);
      })
      .catch((err) => {
        alert("OOps an error has occured!");
      });
  };

  return {
    loading,
    product,
    deleteLoading,
    defaultValues,
    modalVisible,
    updateProductLoading,
    closeOrOpenModal,
    setFormValues,
    setModalVisible,
    refetch,
    handleDelete,
    handleUpdate,
  };
};

export default useDetails;
