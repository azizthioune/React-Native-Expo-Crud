import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import styles from "./AddProductModal.style";
import useAddProduct from "./AddProductModal.hook";

export interface AddProductProps {
  isEdit?: boolean;
  formValues: { code: string; name: string; price: number };
  isLoading: boolean;
  onPress: () => void;
  setFormValues: Dispatch<
    SetStateAction<{ code: string; name: string; price: number }>
  >;
}

export const AddProductModal: React.FC<AddProductProps> = (props) => {
  const h = useAddProduct(props);

  return (
    <View style={styles.modal}>
      <View style={styles.modalBody}>
        <Text style={styles.modalText}>
          {props.isEdit ? "Update" : "Create"} a product
        </Text>
        <View style={styles.inputBlocks}>
          <Text style={styles.inputLabel}>Product Code:</Text>
          <TextInput
            keyboardType="number-pad"
            style={styles.input}
            onChangeText={(text) => h.onChangeText(text, "code")}
            defaultValue={props.formValues?.code}
          />
          <Text style={styles.inputLabel}>Product Name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => h.onChangeText(text, "name")}
            defaultValue={props.formValues?.name}
          />
          <Text style={styles.inputLabel}>Product Price:</Text>
          <TextInput
            keyboardType="number-pad"
            style={styles.input}
            onChangeText={(text) => h.onChangeText(text, "price")}
            defaultValue={props.formValues?.price.toString()}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
          {props.isLoading ? (
            <ActivityIndicator />
          ) : (
            <Text style={styles.buttonText}>
              {" "}
              {props.isEdit ? "Update" : "Add"}{" "}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
