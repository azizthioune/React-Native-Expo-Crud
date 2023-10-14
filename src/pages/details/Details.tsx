import { RouteProp } from "@react-navigation/native";
import SceneKeys from "@src/Constants/sceneKeys";
import { CardItem } from "@src/components/CardItem/CardItem";
import { HeaderBlock } from "@src/components/HeaderBlock/HeaderBlock";
import { ScreenSpinner } from "@src/components/ScreenSpinner/ScreenSpinner";
import { AppStackParamList } from "@src/router/AppNavigator";
import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import useDetails from "./Details.hook";
import styles from "./Details.style";
import Modal from "react-native-modal";
import { AddProductModal } from "@src/components/AddProductModal/AddProductModal";

export interface DetailsProps {
  route: RouteProp<AppStackParamList, SceneKeys.Details>;
}

export const Details: React.FC<DetailsProps> = (props) => {
  const h = useDetails(props);

  return (
    <View style={styles.container}>
      <Modal
        onBackdropPress={h.closeOrOpenModal}
        isVisible={h.modalVisible}
        avoidKeyboard
        onSwipeComplete={h.closeOrOpenModal}
        swipeDirection={["up", "left", "right", "down"]}
        animationIn="bounceInUp"
        animationInTiming={1000}
        style={styles.modal}
      >
        <AddProductModal
          isEdit={true}
          isLoading={h.updateProductLoading}
          onPress={h.handleUpdate}
          formValues={h.defaultValues}
          setFormValues={h.setFormValues}
        />
      </Modal>
      <View style={styles.header}>
        <HeaderBlock title={h.product?.name} isAction={true} isGoBack={true} />
      </View>
      <View style={styles.body}>
        {h.loading ? (
          <ScreenSpinner />
        ) : (
          <View>
            <CardItem data={h.product} />

            <TouchableOpacity
              onPress={h.handleDelete}
              style={styles.deleteButton}
            >
              {h.deleteLoading ? (
                <ActivityIndicator />
              ) : (
                <Text style={styles.deleteButtonText}>Delete Product</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              onPress={h.closeOrOpenModal}
              style={styles.updateButton}
            >
              <Text style={styles.updateButtonText}>Update Product</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};
