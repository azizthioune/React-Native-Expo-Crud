import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./HeaderBlock.style";
import { AntDesign } from "@expo/vector-icons";
import useHeaderBlock from "./HeaderBlock.hook";
import fonts from "@src/styles/Font";

export interface HeaderProps {
  title: string;
  isGoBack: boolean;
  isAction: boolean;
  onActionPress?: () => void;
  actionIcon?: JSX.Element;
  isCustomLeftButton?: boolean;
  onCustomPress?: () => void;
}

export const HeaderBlock: React.FC<HeaderProps> = ({
  title,
  isGoBack,
  isAction,
  isCustomLeftButton,
  onActionPress,
  onCustomPress,
  actionIcon,
}) => {
  const h = useHeaderBlock();

  return (
    <View style={styles.header}>
      {isGoBack ? (
        <TouchableOpacity onPress={h.onPress}>
          <AntDesign name="arrowleft" size={20} color="white" />
        </TouchableOpacity>
      ) : isCustomLeftButton ? (
        <TouchableOpacity onPress={onCustomPress}>
          <AntDesign name="closecircleo" size={24} color="white" />
        </TouchableOpacity>
      ) : (
        <View />
      )}
      <Text style={{ fontSize: 20, color: "white", fontFamily: fonts.regular }}>
        {title}
      </Text>
      {isAction ? (
        <TouchableOpacity onPress={onActionPress}>
          {actionIcon}
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
};
