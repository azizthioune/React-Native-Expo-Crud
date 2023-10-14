import { useNavigation } from "@react-navigation/native";

const useHeaderBlock = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.goBack();
  };

  return {
    onPress,
  };
};

export default useHeaderBlock;
