import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./CardItem.style";
import { Product } from "@src/__generated__/GraphQLTypes";
import useCardItem from "./CardItem.hook";

export interface CardItemProps {
  data: Product;
  onPress?: (item: Product) => void;
}

export const CardItem: React.FC<CardItemProps> = (props) => {
  const h = useCardItem(props);

  return (
    <TouchableOpacity style={styles.cardItem} onPress={h.onCardPress}>
      <Image
        source={{
          uri: h.data?.image,
        }}
        style={styles.image}
      />
      <View style={styles.cardBottom}>
        <View style={styles.cardFirstRow}>
          <Text numberOfLines={1} style={styles.cardBottomText}>
            {h.data?.name}
          </Text>
          <View style={styles.cardBadge}>
            <Text style={styles.cardBadgeText}>#{h.data?.uid} </Text>
          </View>
        </View>
        <View style={styles.cardSecondRow}>
          <Text style={styles.cardSecondRowText}>
            {`${h.data?.price} ${h.data?.currency}`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
