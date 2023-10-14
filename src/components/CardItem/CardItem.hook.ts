import { CardItemProps } from "./CardItem";

const useCardItem = (props: CardItemProps) => {
  const { data, onPress } = props;

  const onCardPress = () => {
    onPress ? onPress(data) : null;
  };

  return {
    data,
    onCardPress,
  };
};

export default useCardItem;
