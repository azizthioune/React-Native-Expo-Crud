import { AntDesign } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";
import { CardItem } from "@src/components/CardItem/CardItem";
import { HeaderBlock } from "@src/components/HeaderBlock/HeaderBlock";
import colors from "@src/styles/Colors";
import React from "react";
import { ActivityIndicator, View } from "react-native";
import useHome from "./Home.hook";
import styles from "./Home.style";
import Modal from "react-native-modal";
import { AddProductModal } from "@src/components/AddProductModal/AddProductModal";
import { RouteProp } from "@react-navigation/native";
import { AppStackParamList } from "@src/router/AppNavigator";
import SceneKeys from "@src/Constants/sceneKeys";

export const Home: React.FC = () => {
  const h = useHome();

  const renderFooter = () => (
    <ActivityIndicator
      size="large"
      style={{ marginVertical: 20 }}
      color={colors.primary}
    />
  );

  const renderDataList = () => (
    <FlashList
      refreshing={h.loading}
      onRefresh={() => h.refetch()}
      onEndReachedThreshold={0}
      onEndReached={h.onEndReached}
      data={h.products}
      renderItem={({ item, index }) => (
        <CardItem key={index} data={item} onPress={h.onPress} />
      )}
      estimatedItemSize={50}
      ListFooterComponent={
        h.loading && h.products?.length ? renderFooter : null
      }
    />
  );

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
          isLoading={h.addProductLoading}
          onPress={h.handleAddProduct}
          formValues={h.formValues}
          setFormValues={h.setFormValues}
        />
      </Modal>
      <View style={styles.header}>
        <HeaderBlock
          title="HOME PAGE"
          isAction={true}
          isGoBack={false}
          onActionPress={h.closeOrOpenModal}
          actionIcon={<AntDesign name="pluscircle" size={24} color="white" />}
        />
      </View>

      <View style={styles.body}>{renderDataList()}</View>
    </View>
  );
};
